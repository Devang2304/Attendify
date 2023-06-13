import User from '../model/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';

export const registerUser = async (req, res) =>{
    const {userName,password} = req.body;
    if(!userName || !password){
        res.status(400).send('Please enter all fields');
        // throw new Error('Please enter all fields');
    }

    const userExists =await User.findOne({userName});

    if(userExists){
        res.status(400).send('User already exists');
    }

    // hashing the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);


    // Create user
    const user = await User.create({
        userName,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user.id,
            userName: user.userName,
        })
    }else{
        res.status(400).send('Invalid user data');
    }
}

export const loginUser = async (req, res) =>{
    const {userName,password} = req.body;
    
    // check for user email
    const user = await User.findOne({userName});

    if(user && (await bcrypt.compare(password,user.password))){
       res.json({
        _id:user.id,
        userName: user.userName,
       })
    }else{
        res.status(400).send('Invalid Credenttials');
    }
}

