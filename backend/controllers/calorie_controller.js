// Developers:
//1. Orel Yehudai, id: 207689308
//2. Netanel Zohar, id: 318970340

import Calorie from "../../DB/models/calorie_model.js";
import User from "../../DB/models/user_model.js";

async function getReport(req, res) {
    try {
        const { year, month, user_id } = req.query;
        // Check if all required query parameters are present        
        if (!year || !month || !user_id) {
            return res.status(400).json({ message: 'Missing required query parameters' });
        }
        // Check if year is a valid number
        if (parseInt(month) < 1 || parseInt(month) > 12) {
            return res.status(400).json({ message: 'Invalid month value' });
        }
        // Check if a user with the given ID exists
        if (!await User.findOne({ id: user_id })) {
            return res.status(404).json({ message: 'User not found' });
        }

        const results = await Calorie.find({
            year: parseInt(year),
            month: parseInt(month),
            user_id: parseInt(user_id)
        });


        const groupedEntries = {
            breakfast: [],
            lunch: [],
            dinner: [],
            other: []
        };

        results.forEach(result => {
            const entry = {
                day: result.day,
                description: result.description,
                amount: result.amount
            };
            groupedEntries[result.category].push(entry);
        });
        res.status(200).json(groupedEntries);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


async function addCalories(req, res) {
    let { user_id, year, month, day, description, category, amount } = req.body;
    if (!year && !month && !day) {
        const time = new Date();
        year = time.getFullYear();
        month = time.getMonth() + 1;
        day = time.getDate();
    }
    else if (!year || !month || !day) {
        return res.status(400).json({ message: 'Missing fields' });
    }
    const isExisting = await User.findOne({ id: user_id });
    if (!isExisting) {
        return res.status(404).json({ message: 'User not found' });
    }
    try {
        const newEntry = new Calorie({
            user_id: user_id,
            year: year,
            month: month,
            day: day,
            description: description,
            amount: amount,
            category: category
        })
        await newEntry.save();
        res.status(201).json({ message: 'New calorie added', data: newEntry });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export { getReport, addCalories };