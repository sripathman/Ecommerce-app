const app = require ('./app');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/DATABASE.JS');
dotenv.config({path:path.join(__dirname,"config/config.env")});
connectDatabase();
const server = app.listen(process.env.PORT,()=>{
  console.log(`My Server listening to the port: ${process.env.PORT} in  ${process.env.NODE_ENV} `)
})
