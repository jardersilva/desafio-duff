import express from 'express';
const beersPlayRoutes = express.Router();

import * as BeersPlayController from './../../controllers/beersPlayController';

beersPlayRoutes.post('/beersPlay', BeersPlayController.show);

export default beersPlayRoutes;
