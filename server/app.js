const connectToMongo = require("./db/conn");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
connectToMongo();
const router = require("./Routes/router");
const PORT = 8000;



// middleware
app.use(express.json());
app.use(cors());
app.use(router);


app.listen(PORT,()=>{
    console.log(`Server start at Port No :${PORT}`)
})
