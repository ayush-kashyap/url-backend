import {customAlphabet } from "nanoid";

export const genId=(size)=>{
    const nanoid=customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",size)
    return nanoid()
}