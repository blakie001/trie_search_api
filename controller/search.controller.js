import { indexTerm, searchPrefixService } from "../services/search.service.js";

export const search = async(req, res) =>{
    const { prefix } = req.query;

    if(!prefix) {
        return res.status(400).json("Please Enter Prefix");
    }
    try {
        const result = await searchPrefixService(prefix);
        return res.status(200).json({ result });
    } catch (error) {
        return res.status(500).json("Interval Server Error");
    }
}

export const newIndexTerm = async(req, res) =>{
    const { term } = req.body;

    if(!term) {
        return res.status(400).json("Term is Required");
    }

    try {
        await indexTerm(term);

        return res.status(200).json("Term Indexed");
    } catch (error) {
        return res.status(500).json("Interval Server Error");
    }
}