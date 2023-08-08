import { Router } from "express";
import passport from "../auth/passport.strategy.js"
import authControl from "../controllers/auth.controller.js";

const auth = Router();

auth.get("/login", authControl)

auth.get("/profile", passport.authenticate('bearer', {session: false}) , (req, res) => {
   res.send("authenticated")
})

export default auth; 