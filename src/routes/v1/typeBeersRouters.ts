import express from 'express';
const typeBeersRoutes = express.Router();
import * as TypeBeersController from './../../controllers/typeBeersController';

typeBeersRoutes.get('/typesBeers', TypeBeersController.index);
typeBeersRoutes.get('/typesBeers/:id', TypeBeersController.show);
typeBeersRoutes.delete('/typesBeers/:id', TypeBeersController.remove);
typeBeersRoutes.post('/typesBeers', TypeBeersController.create);
typeBeersRoutes.put('/typesBeers/:id', TypeBeersController.update);

export default typeBeersRoutes;
