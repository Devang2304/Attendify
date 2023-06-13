import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName :{
        type: String,
        required: [true, 'Please add a Username']
    },
    password: {
        type: String,
        required : [true, 'Please add a password']
    }
});

const User =mongoose.model('user',userSchema);

export default User;