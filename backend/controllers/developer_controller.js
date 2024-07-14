// Developers:
//1. Orel Yehudai, id: 207689308
//2. Netanel Zohar, id: 318970340

import Developer from "../../DB/models/developer_model.js";

async function createNewDev(req, res){
    try {
        const newDev = new Developer(req.body);
        await newDev.save();
        res.status(201).json(newDev);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

async function getDevelopers(req, res){
    try {
        const dev = await Developer.find().select('-_id -__v');
        res.status(200).json(dev);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export { createNewDev, getDevelopers };