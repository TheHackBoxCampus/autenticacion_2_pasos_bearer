import jwt from "jsonwebtoken";
import globalProperties from "../env/env.js";

const generateToken = () => {
    return new Promise((resolve, reject) => {
        let numberRand = Math.floor(Math.random() * 10)
        jwt.sign({id: numberRand}, globalProperties.KEY, {expiresIn: "5m", algorithm: "HS256"}, (err, token) => {
            err ? reject(err) : resolve(token)
        })  
    })
} 

export default generateToken; 