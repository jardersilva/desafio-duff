/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Request, Response, NextFunction } from 'express';
import SweggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import Routers from './routes';
import { options } from './swagger';
import * as Sentry from '@sentry/node';
import './database';
import './helpers/dontenv';

import cors from 'cors';
import AppError from './middlewares/AppError';

const app = express();
const server = require('http').Server(app);
const specs = swaggerJsDoc(options);

app.use(express.json());
app.use(Sentry.Handlers.requestHandler());
app.use(cors());
app.use('/api', Routers);
app.use('/docs/v1', SweggerUI.serve, SweggerUI.setup(specs));

server.listen(process.env.PORT || 3333);
