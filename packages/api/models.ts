export interface User {
  name: string;
}

export interface Artist {
  url: string;
  name: string;
  mbid: string;
}

export interface Image {
  '#text': string;
  size: string; // TODO consider making enum
}

export interface ArtistDetail extends Artist {
  image: Image[];
}

export interface Track {
  duration: string;
  name: string;
  artist: Artist;
  mbid: string;
  image: Image[];
  url: string;
}

export interface Album {
  name: string;
  url: string;
  image: Image[];
}

export interface TrackDetail extends Track {
  album: Album;
}
