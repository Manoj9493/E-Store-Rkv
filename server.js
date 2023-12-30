import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from "./routes/categoryRoutes.js";
import cors from "cors";
import productRoutes from "./routes/productRoutes.js";


//configure env
dotenv.config();

//databse configuration
connectDB();


const PORT = process.env.PORT;


//Creating rest Object
const app = express();

//middleware
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/v1/auth',authRoutes);

//Creating rest api
app.get('/',(req,res)=>{
   res.send(`<h1 align='center'> Server Running on ${PORT}`);
})

//port
app.listen(PORT,()=>{
    console.log(`Server Running on the  ${process.env.DEV_MODE}  mode on  the port ${PORT}`.bgCyan.white);
})