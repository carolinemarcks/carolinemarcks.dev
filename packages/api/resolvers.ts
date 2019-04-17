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
    loaders.artistLoader.load(parent.name).then((ad: ArtistDetail): Image[] => ad.image),
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
    loaders.trackLoader
      .load({ trackName: parent.name, artistName: parent.artist.name })
      .then(({ album }): Album | null => album),
};

const albumResolvers = AlbumResolvers.defaultResolvers;

const userResolvers = {
  ...UserResolvers.defaultResolvers,
  topTracks: (user: User): Promise<Track[]> => loaders.topTrackLoader.load(user.name),
};

export default {
  Artist: artistResolvers,
  Image: imageResolvers,
  Query: queryResolvers,
  Track: trackResolvers,
  Album: albumResolvers,
  User: userResolvers,
};
