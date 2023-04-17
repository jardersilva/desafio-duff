/* eslint-disable @typescript-eslint/no-var-requires */
import AppError from '../../middlewares/AppError';
import TypesBeers from '../../models/TypesBeers';

const ShowTypeBeersService = async (
  id: number | string,
): Promise<TypesBeers> => {
  const type = await TypesBeers.findByPk(id);

  if (!type) {
    throw new AppError('Type not found', 404);
  }

  return type;
};

export default ShowTypeBeersService;
