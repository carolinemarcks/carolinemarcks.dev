import {
  ArtistResolvers,
  ImageResolvers,
  QueryResolvers,
  TrackResolvers,
  UserResolvers,
  AlbumResolvers,
} from './generated/graphqlgen';
import loaders from './loaders';
import { Artist, Image, Track, User, ArtistDetail, Album } from './models';

const artistResolvers: ArtistResolvers.Type = {
  ...ArtistResolvers.defaultResolvers,
  image: (parent: Artist): Promise<Image[]> =>
    loaders.artistInfoLoader.load(parent.name).then((ad: ArtistDetail): Image[] => ad.image),
};

const imageResolvers: ImageResolvers.Type = {
  ...ImageResolvers.defaultResolvers,
  url: (image: Image): string => image['#text'],
};

const queryResolvers: QueryResolvers.Type = {
  user: (parent: undefined, args: QueryResolvers.ArgsUser): User => ({
    name: args.name,
  }),
};

const trackResolvers: TrackResolvers.Type = {
  ...TrackResolvers.defaultResolvers,
  album: (parent: Track): Promise<Album | null> =>
    loaders.trackLoader.load({ trackName: parent.name, artistName: parent.artist.name }).then(
      (track): Album | null => {
        if (!track.album) return null;
        return {
          ...track.album,
          name: track.album.title,
          artistName: track.album.artist,
        };
      },
    ),
};

const albumResolvers: AlbumResolvers.Type = {
  ...AlbumResolvers.defaultResolvers,
  artist: (album: Album): Promise<Artist> => loaders.artistLoader.load(album.artistName),
};

const userResolvers: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  topTracks: (user: User): Promise<Track[]> => loaders.topTrackLoader.load(user.name),
  topArtists: (user: User): Promise<Artist[]> => loaders.topArtistsLoader.load(user.name),
  topAlbums: (user: User): Promise<Album[]> =>
    loaders.topAlbumsLoader.load(user.name).then(
      (albums): Album[] =>
        albums.map(
          (album): Album => ({
            ...album,
            artistName: album.artist.name,
          }),
        ),
    ),
};

export default {
  Artist: artistResolvers,
  Image: imageResolvers,
  Query: queryResolvers,
  Track: trackResolvers,
  Album: albumResolvers,
  User: userResolvers,
};
