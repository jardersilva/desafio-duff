import { Router } from 'express';
import v1Routers from './v1';

const routes = Router();

routes.use('/v1', v1Routers);

export default routes;
