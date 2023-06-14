import User from '../model/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import asyncHandler from 'express-async-handler';

export const registerUser = async (req, res) =>{
    const {userName,password} = req.body;
    if(!userName || !password){
        res.status(400).send('Please enter all fields');
    }

    const userExists =await User.findOne({userName});

    if(userExists){
        res.status(400).send('User already exists');
    }else{

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
            token: generateToken(user._id)
        })
    }else{
        res.status(400).json('Invalid user data');
        }

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
        token: generateToken(user._id),
       })
    }else{
        res.status(400).send('Invalid Credenttials');
    }
}

// generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

export const getMe = async (req, res) =>{
    res.status(200).json('this is dashboard');
    // const {_id, userName} =await User.findById(req.user.id);

    // res.status(200).json({
    //     id:_id,
    //     userName
    // })
}
