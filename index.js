import express from "express";
import client from "./config/redis.config.js";
import searchRoute from "./routes/search.routes.js";
// import { testData } from "./helper/testData.js";
import { addTerm } from "./models/trieSearch.js";
import { initializeTestData } from "./services/search.service.js";

const server = express();
const port = process.env.PORT || 3000;


server.use(express.json());
server.use("", searchRoute);

initializeTestData();


server.listen(port, ()=>{
    console.log(`Server is Running at ${port}`);
})