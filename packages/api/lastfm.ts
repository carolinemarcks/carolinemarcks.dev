import axios from 'axios';
import environment from './environment';
import { ArtistDetail, Track } from './models';

const { lastfmKey } = environment;

const instance = axios.create();

const get = <T>(params: { [param: string]: string }): Promise<T> =>
  instance
    .request({
      method: 'get',
      params: {
        api_key: lastfmKey,
        format: 'json',
        ...params,
      },
      url: 'http://ws.audioscrobbler.com/2.0/',
    })
    .then(
      ({ data }): Promise<T> => (data.error ? Promise.reject(data.message) : Promise.resolve(data)),
      (err): Promise<T> => Promise.reject(err.message),
    );

const getTopTracksForUser = (user: string): Promise<Track[]> =>
  get<{ toptracks: { track: Track[] } }>({
    method: 'user.getTopTracks',
    user,
  }).then(({ toptracks }): Track[] => toptracks.track);

const getArtistInfo = (artist: string): Promise<ArtistDetail> =>
  get<{ artist: ArtistDetail }>({ artist, method: 'artist.getInfo' }).then((data): ArtistDetail => data.artist);

export default {
  getArtistInfo,
  getTopTracksForUser,
};
