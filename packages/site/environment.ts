interface Environment {
  apiUri: string;
}
const apiUri = `${process.env.DOMAIN_NAME}/api/graphql`;
const environment: Environment = {
  apiUri: apiUri.startsWith('http') ? apiUri : `https://${apiUri}`,
};

export default environment;
