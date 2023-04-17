import express from 'express';
require('../../helpers/dontenv');

const HelloRouter = express.Router();

HelloRouter.get('/hello', (req, res) => {
  return res.json({ message: `Hello World` });
});

HelloRouter.get('/hello/:name', (req, res) => {
  return res.json({ message: `Hello World ${req.params.name}` });
});

HelloRouter.post('/hello', (req, res) => {
  return res.json({ message: `Hello World ${req.body.name}` });
});

export default HelloRouter;
