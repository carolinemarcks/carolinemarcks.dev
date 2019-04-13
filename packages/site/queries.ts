import gql from 'graphql-tag';

export const topTracks = gql`
  query TopTracks {
    user(name: "cmarcksthespot") {
      topTracks {
        name
        image {
          size
          url
        }
      }
    }
  }
`;
