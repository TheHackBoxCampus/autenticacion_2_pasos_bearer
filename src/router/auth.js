import { Router } from "express";
import passport from "../auth/passport.strategy.js"
import authControl from "../controllers/auth.controller.js";

const auth = Router();

auth.get("/profile", (req,res) => {
   res.send(req.headers)
})

export default auth; 