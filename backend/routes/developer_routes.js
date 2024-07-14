// Developers:
//1. Orel Yehudai, id: 207689308
//2. Netanel Zohar, id: 318970340

import Express from 'express';
import { createDeveloper, getDevelopers } from '../controllers/developer_controller.js';

const developerRouter = Express.Router();

developerRouter.get('/about', getDevelopers);

developerRouter.post('/createdeveloper', createDeveloper);

export default developerRouter;
