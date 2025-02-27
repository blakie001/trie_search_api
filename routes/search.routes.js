import express from "express";
import { newIndexTerm, search } from "../controller/search.controller.js";

const router = express.Router();

router.get("/search", search);

router.post("/index", newIndexTerm);


export default router;