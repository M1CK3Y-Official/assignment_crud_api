import mongoose, { Schema } from 'mongoose';

const quandaScheme = new Schema({

    question: { type: String, required: true },
    answer: { type: String, required: true },
    created: { type: Date,  default: new Date() },
    
});

export default mongoose.models.qanda || mongoose.model('qanda', quandaScheme);