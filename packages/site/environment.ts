interface IEnvironment {
  apiUri: string;
}

export const environment: IEnvironment = {
  apiUri: 'https://' + process.env.DOMAIN_NAME + '/api/graphql',
};
