import ITypesBeers from '../../interfaces/ITypesBeers';
import TypesBeers from '../../models/TypesBeers';
import createError from 'http-errors';

const CreateTypeBeerService = async (
  data: ITypesBeers | undefined,
): Promise<TypesBeers> => {
  try {
    const type = await TypesBeers.create({ ...data });
    return type;
  } catch (error: any) {
    throw createError(400, 'Error to create type');
  }
};

export default CreateTypeBeerService;
