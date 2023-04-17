import TypesBeers from '../../models/TypesBeers';
import createError from 'http-errors';

const RemoveTypeBeerService = async (id: number | string): Promise<void> => {
  try {
    const type = await TypesBeers.findByPk(id);

    if (!type) {
      throw createError(404, 'Type not found');
    }

    await type.destroy();
  } catch (error: any) {
    throw createError(404, 'Error to remove type');
  }
};

export default RemoveTypeBeerService;
