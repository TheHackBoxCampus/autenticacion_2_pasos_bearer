import express from "express"; 
import morgan from "morgan";
import auth from "./router/auth.js";

const app = express(); 


/**
 * ! middlewares
 */


app.use(express.json());
app.use(express.text()); 
app.use(morgan("dev"))


/**
 *  * Routes 
 */

app.use(auth); 

export default app; 