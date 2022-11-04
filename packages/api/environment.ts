interface Environment {
  apollo: {
    introspection: boolean;
  };
  lastfmKey: string;
}

const environment: Environment = {
  apollo: {
    introspection: process.env.APOLLO_INTROSPECTION === 'true',
  },
  lastfmKey: process.env.LASTFM_API_KEY || '',
};

export default environment;
