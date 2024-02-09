import subscriberModel from "@/lib/db/mongo/models/subscriber.model";
import dbConnect from "./db/dbConnect";

export const getSubscribers = async (body) => {

    let result = {}; 

    try {

        await dbConnect();
        result = await subscriberModel.find({});

    } catch (error) {

        result = {
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    return JSON.parse(JSON.stringify(result));


};

export const createSubscriber = async (body) => {

    let result = {}; 

    try {

        await dbConnect();
        
        console.log('- DATA SERVICE : CREATE SUBSCRIBER')
        result = await subscriberModel.create(body);

    } catch (error) {

        console.log('err', error)
        result = {  
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN CREATED SUBSCRIBER')
    return JSON.parse(JSON.stringify(result));


};

export const updateSubscriber = async (body) => {

    let result = {}; 

    try {

        await dbConnect();
        
        console.log('- DATA SERVICE : UPDATE SUBSCRIBER')
        result = await subscriberModel.findByIdAndUpdate({_id: body.id}, body);

    } catch (error) {

        console.log('err', error)
        result = {  
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN CREATED SUBSCRIBER')
    return JSON.parse(JSON.stringify(result));


};

export const deleteSubscriber = async (id) => {

    let result = {}; 

    try {

        await dbConnect();
        
        console.log('- DATA SERVICE : DELETE SUBSCRIBER')
        result = await subscriberModel.findByIdAndDelete({_id: id});
        
    } catch (error) {

        console.log('err', error)
        result = {  
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN DELETED SUBSCRIBER')
    return JSON.parse(JSON.stringify(result));


};