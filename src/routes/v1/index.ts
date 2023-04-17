import { Router } from 'express';
import HelloRouter from './hello';
import TypeBeersRouter from './typeBeersRouters';
import BeersPlayRouter from './beersPlayRouters';

const v1Routers = Router();

v1Routers.use(HelloRouter);
v1Routers.use(TypeBeersRouter);
v1Routers.use(BeersPlayRouter);

export default v1Routers;
