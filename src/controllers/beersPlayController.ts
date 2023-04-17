import { Request, Response } from 'express';
import httpReturnError from '../middlewares/httpReturn';
import ShowBeersPlaylistService from '../services/GetService/ShowBeersPlaylistService';

export const show = async (req: Request, res: Response) => {
  try {
    const { temperature } = req.body;
    const rest = await ShowBeersPlaylistService(Number(temperature));

    return res.json({ ...rest });
  } catch (error) {
    console.log(error);
    httpReturnError(error, res);
  }
};
