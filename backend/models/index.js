import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const dataSchema = new Schema ({
    cliente : String,
    contrato : String,
    monto: {type: Number, min: 0},
    fecha : Date
});

const Data = mongoose.model('Data', dataSchema);
 export default Data;
 