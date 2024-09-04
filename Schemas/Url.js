import mongoose, { Schema } from "mongoose";

const UrlSchema=new Schema({
    "shortid":{
        type:"String",
        required:true
    },
    "url":{
        type:"String",
        required:true
    }
})

const UrlModel=mongoose.model('url',UrlSchema)

export{UrlModel}