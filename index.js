import Express,{json} from "express";
import cors from 'cors'
import mongoose from "mongoose";
import 'dotenv/config'
import { createUrl } from "./functions/UrlFunctions.js";

const app=Express()
app.use(json())
app.use(cors())

mongoose.connect(process.env.MONGOURL,console.log("DB Connected"))

app.listen(5500,console.log("server listening"))

app.get("/",(req,res)=>{res.send("Server active")})

app.use('/url',createUrl)