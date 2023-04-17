import TypesBeers from '../../models/TypesBeers';
import { Op } from 'sequelize';
import { getSpotifyPlaylist } from '../../repository/spotifyRepository';
import ITypesBeers from '../../interfaces/ITypesBeers';
import AppError from '../../middlewares/AppError';
import BeersPlaylist from '../../interfaces/IBeersPlaylist';

const ShowBeersPlaylistService = async (
  temperature: number,
): Promise<BeersPlaylist> => {
  const type = await TypesBeers.findAll({
    where: {
      [Op.or]: [
        { temperatureMin: { [Op.lte]: temperature } },
        { temperatureMax: { [Op.lte]: temperature } },
      ],
    },
  });

  let selectedStyle: ITypesBeers | undefined;
  let minTemperatureDiff = Infinity;

  type.forEach((style) => {
    const averageTemperature =
      (style.temperatureMin + style.temperatureMax) / 2;
    const temperatureDiff = Math.abs(temperature - averageTemperature);

    if (temperatureDiff < minTemperatureDiff) {
      selectedStyle = style;
      minTemperatureDiff = temperatureDiff;
    }
  });

  const playlist = await getSpotifyPlaylist(selectedStyle?.name);

  if (!selectedStyle) {
    throw new AppError(
      'Não foi possível encontrar um estilo de cerveja adequado ou uma playlist correspondente.',
      404,
    );
  }

  return {
    beerStyle: selectedStyle.name,
    playlist,
  };
};

export default ShowBeersPlaylistService;
