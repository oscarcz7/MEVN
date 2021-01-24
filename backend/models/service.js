import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contractSchema = new Schema ({
    userId : String,
    contractDescription : String,
    quantity: {type: Number, min: 0},
    date : Date
});

const Contract = mongoose.model('Contract', contractSchema);
export default Contract;