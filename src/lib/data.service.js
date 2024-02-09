import dbConnect from "./db/dbConnect";
import qandaModel from "./db/mongo/models/qanda.model";
import subscriberModel from "./db/mongo/models/subscriber.model";



export const getQandas = async (body) => {

    let result = {}; 

    try {

        await dbConnect();
        console.log('- DATA SERVICE : GET ALL QANDA')
        result = await qandaModel.find({});

    } catch (error) {

        result = {
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN ALL QANDA')
    return JSON.parse(JSON.stringify(result));


};

export const createQanda = async (body) => {

    let result = {}; 

    try {

        await dbConnect();
        
        console.log('- DATA SERVICE : CREATE QANDA')
        result = await qandaModel.create(body);

    } catch (error) {

        console.log('err', error)
        result = {  
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN CREATED QANDA')
    return JSON.parse(JSON.stringify(result));


};

export const updateQanda = async (body) => {

    let result = {}; 

    try {

        await dbConnect();
        
        console.log('- DATA SERVICE : UPDATE QANDA')
        result = await qandaModel.findByIdAndUpdate({_id: body.id}, body);

    } catch (error) {

        console.log('err', error)
        result = {  
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN CREATED QANDA')
    return JSON.parse(JSON.stringify(result));


};

export const deleteQanda = async (id) => {

    let result = {}; 

    try {

        await dbConnect();
        
        console.log('- DATA SERVICE : DELETE QANDA')
        result = await qandaModel.findByIdAndDelete({_id: id});
        
    } catch (error) {

        console.log('err', error)
        result = {  
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN DELETED QANDA')
    return JSON.parse(JSON.stringify(result));


};



export const getSubscribers = async (body) => {

    let result = {}; 

    try {

        await dbConnect();
        console.log('- DATA SERVICE : GET ALL SUBSCRIBERS')
        result = await subscriberModel.find({});

    } catch (error) {

        result = {
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN ALL SUBSCRIBERS')
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
        
        console.log('- DATA SERVICE : UPDATED SUBSCRIBER')
        result = await subscriberModel.findByIdAndUpdate({_id: body.id}, body);

    } catch (error) {

        console.log('err', error)
        result = {  
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

    console.log('- DATA SERVICE : RETURN UPDATED SUBSCRIBER')
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
