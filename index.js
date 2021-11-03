import dotenv from 'dotenv';
dotenv.config({ path: 'local.env' })

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

console.log(`Running on port: ${PORT}`)
console.log(`Using API KEY: ${API_KEY}`)