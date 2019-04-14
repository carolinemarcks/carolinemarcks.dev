interface Environment {
  apiUri: string;
}

const environment: Environment = {
  apiUri: `https://${process.env.DOMAIN_NAME}/api/graphql`,
};

export default environment;
