// Developers:
//1. Orel Yehudai, id: 207689308
//2. Netanel Zohar, id: 318970340

import Express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/config.js";
import userRouter from "./backend/routes/user_routes.js";
import developerRouter from "./backend/routes/developer_routes.js"
import calorieRouter from "./backend/routes/calorie_router.js";


dotenv.config();
const cors = require("cors");
const app = Express();

app.use(express.json());
app.use(cors());
app.options("*", cors());

connectDB();

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.use("/", userRouter, developerRouter, calorieRouter); 

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
