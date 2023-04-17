import axios from 'axios';
import * as dontenv from '../helpers/dontenv';
import ISpotifyPlaylist from '../interfaces/ISpotify';

export const getSpotifyPlaylist = async (
  type?: string,
): Promise<ISpotifyPlaylist[]> => {
  try {
    const token = await getTokenSpotify();
    const response = await axios.get(
      `https://api.spotify.com/v1/search?q=${type}&type=track`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
    );

    const { items } = response.data.tracks;
    console.log('itens', response.data);
    const playlist: ISpotifyPlaylist[] = items.map((item: any) => {
      return {
        name: item.name,
        artist: item.artists[0].name,
        link: item.external_urls.spotify,
      };
    });
    return playlist;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

const getTokenSpotify = async (): Promise<string> => {
  const authOptions = {
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Basic ${getBase64()}`,
    },
    data: {
      grant_type: 'client_credentials',
    },
  };

  try {
    const resp = await axios.request(authOptions);
    return resp.data.access_token;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};

function getBase64() {
  const client_id = process.env.CLIENT_ID_SPOTIFY;
  const client_secret = process.env.SECRET_ID_SPOTIFY;

  const buff = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
  console.log('buff', buff);
  return buff;
}
