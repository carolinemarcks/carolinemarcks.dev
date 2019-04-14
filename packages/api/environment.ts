interface Environment {
  apollo: {
    introspection: boolean;
    playground: boolean;
  };
  lastfmKey: string;
}

export const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
    playground: process.env.APOLLO_PLAYGROUND === 'true',
  },
  lastfmKey: process.env.LASTFM_API_KEY || '',
};
