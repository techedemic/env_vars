import dotenv from 'dotenv';
dotenv.config({ path: 'local.env' })

const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

console.log(`Server running on port: ${PORT}`);
console.log(`API KEY: ${API_KEY}`);
console.log(`Database User: ${DB_USER}`);
console.log(`Database Password: ${DB_PASS}`);