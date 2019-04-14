// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import { User, Track, Artist, Image } from '../models';

type Context = any;

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsUser {
    name: string;
  }

  export type UserResolver =
    | ((
        parent: undefined,
        args: ArgsUser,
        ctx: Context,
        info: GraphQLResolveInfo,
      ) => User | null | Promise<User | null>)
    | {
        fragment: string;
        resolve: (
          parent: undefined,
          args: ArgsUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | null | Promise<User | null>;
      };

  export interface Type {
    user:
      | ((
          parent: undefined,
          args: ArgsUser,
          ctx: Context,
          info: GraphQLResolveInfo,
        ) => User | null | Promise<User | null>)
      | {
          fragment: string;
          resolve: (
            parent: undefined,
            args: ArgsUser,
            ctx: Context,
            info: GraphQLResolveInfo,
          ) => User | null | Promise<User | null>;
        };
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    name: (parent: User) => parent.name,
  };

  export type NameResolver =
    | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type TopTracksResolver =
    | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => Track[] | Promise<Track[]>)
    | {
        fragment: string;
        resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => Track[] | Promise<Track[]>;
      };

  export interface Type {
    name:
      | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    topTracks:
      | ((parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => Track[] | Promise<Track[]>)
      | {
          fragment: string;
          resolve: (parent: User, args: {}, ctx: Context, info: GraphQLResolveInfo) => Track[] | Promise<Track[]>;
        };
  }
}

export namespace TrackResolvers {
  export const defaultResolvers = {
    name: (parent: Track) => parent.name,
    artist: (parent: Track) => parent.artist,
    image: (parent: Track) => parent.image,
  };

  export type NameResolver =
    | ((parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type ArtistResolver =
    | ((parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => Artist | Promise<Artist>)
    | {
        fragment: string;
        resolve: (parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => Artist | Promise<Artist>;
      };

  export type ImageResolver =
    | ((parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => Image[] | Promise<Image[]>)
    | {
        fragment: string;
        resolve: (parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => Image[] | Promise<Image[]>;
      };

  export interface Type {
    name:
      | ((parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    artist:
      | ((parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => Artist | Promise<Artist>)
      | {
          fragment: string;
          resolve: (parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => Artist | Promise<Artist>;
        };

    image:
      | ((parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => Image[] | Promise<Image[]>)
      | {
          fragment: string;
          resolve: (parent: Track, args: {}, ctx: Context, info: GraphQLResolveInfo) => Image[] | Promise<Image[]>;
        };
  }
}

export namespace ArtistResolvers {
  export const defaultResolvers = {
    name: (parent: Artist) => parent.name,
  };

  export type NameResolver =
    | ((parent: Artist, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: Artist, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type ImageResolver =
    | ((parent: Artist, args: {}, ctx: Context, info: GraphQLResolveInfo) => Image[] | Promise<Image[]>)
    | {
        fragment: string;
        resolve: (parent: Artist, args: {}, ctx: Context, info: GraphQLResolveInfo) => Image[] | Promise<Image[]>;
      };

  export interface Type {
    name:
      | ((parent: Artist, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: Artist, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    image:
      | ((parent: Artist, args: {}, ctx: Context, info: GraphQLResolveInfo) => Image[] | Promise<Image[]>)
      | {
          fragment: string;
          resolve: (parent: Artist, args: {}, ctx: Context, info: GraphQLResolveInfo) => Image[] | Promise<Image[]>;
        };
  }
}

export namespace ImageResolvers {
  export const defaultResolvers = {
    size: (parent: Image) => parent.size,
  };

  export type UrlResolver =
    | ((parent: Image, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: Image, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export type SizeResolver =
    | ((parent: Image, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
    | {
        fragment: string;
        resolve: (parent: Image, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
      };

  export interface Type {
    url:
      | ((parent: Image, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: Image, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };

    size:
      | ((parent: Image, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>)
      | {
          fragment: string;
          resolve: (parent: Image, args: {}, ctx: Context, info: GraphQLResolveInfo) => string | Promise<string>;
        };
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Track: TrackResolvers.Type;
  Artist: ArtistResolvers.Type;
  Image: ImageResolvers.Type;
}

// @ts-ignore
declare module 'graphql-tools' {
  interface IResolvers extends Resolvers {}
}
