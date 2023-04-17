import ITypesBeers from '../../interfaces/ITypesBeers';
import TypesBeers from '../../models/TypesBeers';
import createError from 'http-errors';

const UpdateTypeBeerService = async (
  data: ITypesBeers,
  id: number | string,
): Promise<TypesBeers> => {
  try {
    const type = await TypesBeers.findByPk(id);

    if (!type) {
      throw createError(404, 'Type not found');
    }

    type.update({ ...data });
    return type;
  } catch (error: any) {
    throw createError(404, 'Error to create type');
  }
};

export default UpdateTypeBeerService;
