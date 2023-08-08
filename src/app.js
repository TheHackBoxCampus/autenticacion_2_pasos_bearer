import express from "express"; 
import morgan from "morgan";
import auth from "./router/auth.js";
import passport from "passport";

const app = express(); 
/**
 * ! middlewares
 */
app.use(express.json());
app.use(express.text()); 
app.use(morgan("dev"))
app.use(passport.initialize()); 

/**
 *  * Routes 
 */

app.use(auth); 

export default app; 