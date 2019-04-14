interface Environment {
  apiUri: string;
}

const environment: Environment = {
  apiUri: `${process.env.DOMAIN_NAME}/api/graphql`,
};

export default environment;
