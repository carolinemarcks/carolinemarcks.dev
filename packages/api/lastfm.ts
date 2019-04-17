import axios from 'axios';
import environment from './environment';
import { ArtistDetail, Track, TrackDetail } from './models';

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

const getTrackInfo = ({ trackName, artistName }: { trackName: string; artistName: string }): Promise<TrackDetail> =>
  get<{ track: TrackDetail }>({ artist: artistName, track: trackName, method: 'track.getInfo' }).then(
    ({ track }): TrackDetail => {
      const { album, ...other } = track;
      if (album) return track;
      return {
        ...other,
        album: null, // make sure artist is _null_ not just undefined
      };
    },
  );

export default {
  getArtistInfo,
  getTopTracksForUser,
  getTrackInfo,
};
