// Developers:
//1. Orel Yehudai, id: 207689308
//2. Netanel Zohar, id: 318970340

import Express from "express";
import { createNewUser , getUserDetailsById } from "../controllers/user_controller.js";

const userRouter = Express.Router();

userRouter.post('/signup', createNewUser);

userRouter.get('/users/:id', getUserDetailsById);



export default userRouter;