import IIndexQuery from '../../interfaces/IIndexQuery';
import TypesBeers from '../../models/TypesBeers';
import createError from 'http-errors';

interface Response {
  typesBeers: TypesBeers[];
  count: number;
  offset: number;
  hasMore: boolean;
  paginateCount: number;
}

const ListTypeBeersService = async ({
  pageNumber = '1',
  perPage = 10,
}: IIndexQuery): Promise<Response> => {
  try {
    const limit = (perPage * 1) as number;
    const off = limit * (+pageNumber - 1);
    const { count, rows: typesBeers } = await TypesBeers.findAndCountAll({
      limit,
      offset: off,
    });

    const hasMore = count > off + typesBeers.length;
    const offset = off + 1;
    const paginateCount = Math.ceil(count / limit);
    return {
      typesBeers,
      count,
      offset,
      paginateCount,
      hasMore,
    };
  } catch (error: any) {
    console.error(error);
    throw createError(500, 'Error to find type');
  }
};

export default ListTypeBeersService;
