import { Request, Response } from 'express';
import AppError from './AppError';

const httpReturnError = async (err: any, res: Response) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: err.message });
  }

  res.json({
    status: 500,
    message: 'Internal server error',
  });
};

export default httpReturnError;
