import mongoose, { Schema } from 'mongoose';

const subscriberScheme = new Schema({

    name: { type: String, required: true },
    email: { type: String, required: true },
    created: { type: Date,  default: new Date() },
    
});

export default mongoose.models.subscriber || mongoose.model('subscriber', subscriberScheme);