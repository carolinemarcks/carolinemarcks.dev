import axios from 'axios';
import environment from './environment';

const { lastfmKey } = environment;

const instance = axios.create();

const get = <T>(params: { [param: string]: string | number }): Promise<T> =>
  instance
    .request({
      method: 'get',
      params: {
        api_key: lastfmKey,
        format: 'json',
        limit: 32,
        period: '6month',
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

export interface TopAlbum {
  artist: {
    url: string;
    name: string;
    mbid: string;
  };
  '@attr': {
    rank: string;
  };
  image: Image[];
  playcount: string;
  url: string;
  name: string;
  mbid: string;
}

export interface TopAlbums {
  album: TopAlbum[];
  '@attr': {
    page: string;
    perPage: string;
    user: string;
    total: string;
    totalPages: string;
  };
}

const getTopAlbumImages = (mbid: string): Promise<Image[]> =>
  get<{ topalbums: TopAlbums }>({
    method: 'artist.getTopAlbums',
    mbid,
    limit: 1,
  }).then(({ topalbums }): Image[] => topalbums.album[0].image);

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
  album?: {
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

const getArtistInfo = (artist: string): Promise<{ artist: ArtistInfo }> =>
  get<{ artist: ArtistInfo }>({ artist, method: 'artist.getInfo' }).then((a) =>
    // Last FM's API now blocks loading images for artists directly, so we instead populate
    // the top album image
    getTopAlbumImages(a.artist.mbid)
      .then((image) => ({
        artist: {
          ...a.artist,
          image,
        },
      }))
      .catch(() => a),
  );

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

const getTopTracks = (user: string): Promise<{ toptracks: TopTracks }> =>
  get<{ toptracks: TopTracks }>({
    method: 'user.getTopTracks',
    user,
  });

const getTrackInfo = ({
  trackName,
  artistName,
}: {
  trackName: string;
  artistName: string;
}): Promise<{ track: TrackInfo }> =>
  get<{ track: TrackInfo }>({ artist: artistName, track: trackName, method: 'track.getInfo' });

const getTopArtists = (user: string): Promise<{ topartists: TopArtists }> =>
  get<{ topartists: TopArtists }>({
    method: 'user.getTopArtists',
    user,
  }).then(({ topartists }: { topartists: TopArtists }): Promise<{ topartists: TopArtists }> => {
    // Last FM's API now blocks loading images for artists directly, so we instead populate
    // the top album image
    const topArtistsWithAlbumImages: Promise<TopArtist>[] = topartists.artist.map(
      (artist: TopArtist): Promise<TopArtist> =>
        getTopAlbumImages(artist.mbid)
          .then((image) => ({ ...artist, image }))
          .catch(() => artist),
    );

    // flatten the promises!
    return Promise.all(topArtistsWithAlbumImages).then((artist: TopArtist[]): { topartists: TopArtists } => ({
      topartists: { artist },
    }));
  });

const getTopAlbums = (user: string): Promise<{ topalbums: TopAlbums }> =>
  get<{ topalbums: TopAlbums }>({
    method: 'user.getTopAlbums',
    user,
  });

export default {
  getTrackInfo,
  getTopTracks,
  getArtistInfo,
  getTopArtists,
  getTopAlbums,
};
