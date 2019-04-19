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

const topAlbums = gql`
  query TopAlbums {
    user(name: "cmarcksthespot") {
      topAlbums {
        name
        url
        image {
          url
          size
        }
        artist {
          name
        }
      }
    }
  }
`;

const topArtists = gql`
  query TopArtists {
    user(name: "cmarcksthespot") {
      topArtists {
        name
        url
        image {
          url
          size
        }
      }
    }
  }
`;

export default {
  topTracks,
  topAlbums,
  topArtists,
};
