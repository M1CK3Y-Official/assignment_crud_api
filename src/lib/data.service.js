import dbConnect from "./db/dbConnect";
import qandaModel from "./db/mongo/models/qanda.model";

export const getQandas = async (body) => {

    let result = {}; 

    try {

        await dbConnect();
        result = await qandaModel.find({});

    } catch (error) {

        result = {
            errorCode : error.code,
            message : 'Der skete en en validerings fejl?'
        }
    }

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