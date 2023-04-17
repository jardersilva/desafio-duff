import CreateTypeBeerService from './../services/TypeBeer/CreateTypeBeerService';
import TypeBeers from '../models/TypesBeers';

describe('CreateTypeBeerService', () => {
  it('should create a new type of beer', async () => {
    const data = { name: 'IPA', temperatureMin: 4, temperatureMax: 6 };
    const type = await CreateTypeBeerService(data);
    expect(type).toHaveProperty('id');
    expect(type.name).toEqual(data.name);
  });

  it('should throw an error if unable to create a new type of beer', async () => {
    const data = { name: 'IPA', temperatureMin: 4, temperatureMax: 6 };
    jest.spyOn(TypeBeers, 'create').mockImplementationOnce(() => {
      throw new Error('Unable to create a new type of beer');
    });

    try {
      await CreateTypeBeerService(data);
    } catch (error: any) {
      expect(error.status).toBe(404);
      expect(error.message).toBe('Error to create type');
    }
  });
});
