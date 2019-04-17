import gql from 'graphql-tag';

const topTracks = gql`
  query TopTracks {
    user(name: "cmarcksthespot") {
      topTracks {
        name
        url
        artist {
          name
        }
        album {
          image {
            size
            url
          }
        }
      }
    }
  }
`;

export default topTracks;
