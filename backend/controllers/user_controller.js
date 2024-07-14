// Developers:
//1. Orel Yehudai, id: 207689308
//2. Netanel Zohar, id: 318970340

import mongoose from "mongoose";
import User from "../../DB/models/user_model.js";

async function createNewUser(req, res) {
  try {
    const newUser = new User(req.body);
    await newUser.save().then(user => {
      return res.status(201).json(user);
    });
  } catch (error) {
    return res.status(400).json({ error: error });
  }
}

async function getUserDetailsById(req, res) {
  try {
    const userId = parseInt(req.params.id, 10); 

    if (isNaN(userId)) {
      return res.status(400).json({ error: "Invalid user ID format" });
    }

    const user = await User.findOne({ id: userId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export { createNewUser, getUserDetailsById };