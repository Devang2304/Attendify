import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routes from './routes/routes.js';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
dotenv.config();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));

const userName = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const CONNECTION_URL =`mongodb+srv://${userName}:${password}@cluster0.ngb8lfk.mongodb.net/Attendance-Tracker`;

mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log('Connected to MongoDB successfully');
}).catch(err=>{console.log(err.message)});

app.listen(PORT,()=>{
    console.log(`Server listening on port http://localhost:${PORT}`);
});


app.use('/',Routes);

app.get('/',(req,res)=>{
    res.send("<h2>YOU ARE ON MAIN SERVER<h2>");
})