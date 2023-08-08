import generateToken from "../libs/token.js";

const authControl = async () => {
    let token =  await generateToken(); 
    return {state: true, token}   
}

export default authControl; 