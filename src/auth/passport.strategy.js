import passport from "passport";
import { Strategy as BearerStrategy } from "passport-http-bearer"
import jwt from "jsonwebtoken";
import globalProperties from "../env/env.js";

/**
 * ? settings
 */

passport.use(new BearerStrategy((token, cb) =>  {
    jwt.verify(token, globalProperties.KEY, {algorithm:'HS256'}, (err, decoded) => {
        err ? cb(err) : cb(null, decoded, {scope: "*"})
    })
}));


export default passport; 

