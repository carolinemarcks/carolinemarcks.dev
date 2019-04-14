interface Environment {
  apiUri: string;
}

export const environment: Environment = {
  apiUri: `https://${process.env.DOMAIN_NAME}/api/graphql`,
};
