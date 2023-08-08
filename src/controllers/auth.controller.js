import generateToken from "../libs/token.js";

const authControl = async (req, res) => {
    let token =  await generateToken(); 
    res.send({state:true, token})
}

export default authControl; 