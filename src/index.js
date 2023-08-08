import app from "./app.js";
import globalProperties from "./env/env.js";

const start = () => {
  try {
    const $SERVER = JSON.parse(globalProperties.SERVER); 
    app.listen($SERVER, () => {
        console.log(`listening http://${$SERVER.hostname}:${$SERVER.port}`)
    })
  } catch (error) {
    throw Error(error);
  }
};

start(); 