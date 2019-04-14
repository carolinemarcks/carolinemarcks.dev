import axios from 'axios';
import { environment } from './environment';
import { ArtistDetail, Track } from './models';

const { lastfmKey } = environment;

const instance = axios.create();

const get = (params: { [param: string]: string }) =>
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
    .then(({ data }) => (data.error ? Promise.reject(data.message) : data), err => Promise.reject(err.message));

const getTopTracksForUser = (user: string): Promise<Track[]> =>
  get({
    method: 'user.getTopTracks',
    user,
  }).then(({ toptracks }) => toptracks.track);

const getArtistInfo = (artist: string): Promise<ArtistDetail> =>
  get({ artist, method: 'artist.getInfo' }).then(data => data.artist);

export default {
  getArtistInfo,
  getTopTracksForUser,
};
