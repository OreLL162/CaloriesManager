// Developers:
//1. Orel Yehudai, id: 207689308
//2. Netanel Zohar, id: 318970340

import Express from 'express';
import { getReport, addCalories } from '../controllers/calorie_controller.js';

const calorieRouter = Express.Router();

calorieRouter.get('/report', getReport);

calorieRouter.post('/addcalories', addCalories);

export default calorieRouter;