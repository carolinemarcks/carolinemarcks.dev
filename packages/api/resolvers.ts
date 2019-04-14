import { ArtistResolvers, ImageResolvers, QueryResolvers, TrackResolvers, UserResolvers } from './generated/graphqlgen';
import loaders from './loaders';
import { Artist, Image, Track, User } from './models';

export default {
  Artist: {
    ...ArtistResolvers.defaultResolvers,
    image: (parent: Artist) => loaders.artistLoader.load(parent.name).then(ad => ad.image),
  },
  Image: {
    ...ImageResolvers.defaultResolvers,
    url: (image: Image): string => image['#text'],
  },
  Query: {
    user: (parent: undefined, args: QueryResolvers.ArgsUser): User => ({
      name: args.name,
    }),
  },
  Track: TrackResolvers.defaultResolvers,
  User: {
    ...UserResolvers.defaultResolvers,
    topTracks: (user: User): Promise<Track[]> => loaders.topTrackLoader.load(user.name),
  },
};
