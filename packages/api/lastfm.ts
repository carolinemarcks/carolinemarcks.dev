import axios from 'axios';
import environment from './environment';

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

export interface Image {
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega' | '';
  '#text': string;
}

export interface ArtistInfo {
  name: string;
  mbid: string;
  url: string;
  image: Image[];
  streamable: string;
  ontour: string;
  stats: {
    listeners: string;
    playcount: string;
  };
  similar: {
    artist: {
      name: string;
      url: string;
      image: Image[];
    }[];
  };
  tags: {
    tag: {
      name: string;
      url: string;
    }[];
  };
  bio: {
    links: {
      link: {
        '#text': string;
        rel: string;
        href: string;
      };
    };
    published: string;
    summary: string;
    content: string;
  };
}

const getArtistInfo = (artist: string): Promise<{ artist: ArtistInfo }> =>
  get<{ artist: ArtistInfo }>({ artist, method: 'artist.getInfo' });

export interface TopTrack {
  '@attr': {
    rank: string;
  };
  duration: string;
  playcount: string;
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
  image: Image[];
  streamable: {
    fulltrack: string;
    '#text': string;
  };
  mbid: string;
  name: string;
  url: string;
}

export interface TopTracks {
  '@attr': {
    page: string;
    perPage: string;
    user: string;
    total: string;
    totalPages: string;
  };
  track: TopTrack[];
}

const getTopTracks = (user: string): Promise<{ toptracks: TopTracks }> =>
  get<{ toptracks: TopTracks }>({
    method: 'user.getTopTracks',
    user,
  });

export interface TrackInfo {
  name: string;
  mbid: string;
  url: string;
  duration: string;
  streamable: {
    '#text': string;
    fulltrack: string;
  };
  listeners: string;
  playcount: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  album: {
    artist: string;
    title: string;
    mbid: string;
    url: string;
    image: [];
    '@attr': {
      position: string;
    };
  };
  toptags: {
    tag: {
      name: string;
      url: string;
    }[];
  };
}

const getTrackInfo = ({
  trackName,
  artistName,
}: {
  trackName: string;
  artistName: string;
}): Promise<{ track: TrackInfo }> =>
  get<{ track: TrackInfo }>({ artist: artistName, track: trackName, method: 'track.getInfo' });

export interface TopArtist {
  '@attr': {
    rank: string;
  };
  mbid: string;
  url: string;
  playcount: string;
  image: Image[];
  name: string;
  streamable: string;
}

export interface TopArtists {
  artist: TopArtist[];
}

const getTopArtists = (user: string): Promise<{ topartists: TopArtists }> =>
  get<{ topartists: TopArtists }>({
    method: 'user.getTopArtists',
    user,
  });

export default {
  getTrackInfo,
  getTopTracks,
  getArtistInfo,
  getTopArtists,
};
