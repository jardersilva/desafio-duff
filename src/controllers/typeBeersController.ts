import { Request, Response } from 'express';
import IIndexQuery from '../interfaces/IIndexQuery';
import ListTypeBeersService from '../services/TypeBeer/ListTypeBeersService';
import ShowTypeBeersService from '../services/TypeBeer/ShowTypeBeerService';
import RemoveTypeBeerService from '../services/TypeBeer/RemoveTypeBeerService';
import CreateTypeBeerService from '../services/TypeBeer/CreateTypeBeerService';
import ITypesBeers from '../interfaces/ITypesBeers';
import UpdateTypeBeerService from '../services/TypeBeer/UpdateTypeBeerService';
import httpReturnError from '../middlewares/httpReturn';

export const index = async (req: Request, res: Response) => {
  const { searchParam, pageNumber, perPage } = req.query as IIndexQuery;

  const { typesBeers, count, hasMore, offset, paginateCount } =
    await ListTypeBeersService({
      searchParam,
      pageNumber,
      perPage,
    });

  return res.json({ typesBeers, count, hasMore, offset, paginateCount });
};

export const show = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const type = await ShowTypeBeersService(id);

    return res.json({ type });
  } catch (error) {
    httpReturnError(error, res);
  }
};

export const remove = async (req: Request, res: Response) => {
  const { id } = req.params;

  await RemoveTypeBeerService(id);

  return res.status(200).json({ message: 'Type deleted' });
};

export const create = async (req: Request, res: Response) => {
  const data: ITypesBeers = req.body;

  const type = await CreateTypeBeerService(data);

  return res.status(201).json(type);
};

export const update = async (req: Request, res: Response) => {
  const { id } = req.params;

  const data: ITypesBeers = req.body;

  const type = await UpdateTypeBeerService(data, id);

  return res.status(200).json(type);
};
