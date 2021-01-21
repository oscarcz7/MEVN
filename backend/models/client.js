import mongoose from 'mongoose';
const Schema = mongoose.Schema;

//unique validator for unique email
const uniqueValidator = require('mongoose-unique-validator')

//roles list
const roles = {
    values: ['ADMIN', 'USER'],
    message : '{VALUE} invalid rol' 
};

//Schema definition
const clientSchema = new Schema({
    clientName: {type: String, required: [true, 'Client name required']},
    email:{
        type: String,
        required: [true, 'Email required'],
        unique: true
    },
    password: { type: String, required: true},
    role: {type: String, default: 'USER', enum: roles}
});


clientSchema.plugin(uniqueValidator, {message: 'Error, expected {} unique'});

//
clientSchema.methods.toJSON = function () {
    const obj = this.toObject();
    delete obj.password;
    return obj;
};

const Client = mongoose.model('Client', clientSchema);
//export schema
export default Client;



