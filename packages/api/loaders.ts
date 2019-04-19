import DataLoader from 'dataloader';
import lastFm, { ArtistInfo, TrackInfo, TopTrack, TopArtist, TopAlbum } from './lastfm';

const topTrackLoader: DataLoader<string, TopTrack[]> = new DataLoader(
  (usernames: string[]): Promise<TopTrack[][]> =>
    Promise.all(
      usernames.map(
        (username: string): Promise<TopTrack[]> =>
          lastFm.getTopTracks(username).then(({ toptracks }): TopTrack[] => toptracks.track),
      ),
    ),
);

const topArtistsLoader: DataLoader<string, TopArtist[]> = new DataLoader(
  (usernames: string[]): Promise<TopArtist[][]> =>
    Promise.all(
      usernames.map(
        (username: string): Promise<TopArtist[]> =>
          lastFm.getTopArtists(username).then(({ topartists }): TopArtist[] => topartists.artist),
      ),
    ),
);

const artistInfoLoader: DataLoader<string, ArtistInfo> = new DataLoader(
  (artists: string[]): Promise<ArtistInfo[]> =>
    Promise.all(
      artists.map(
        (artist: string): Promise<ArtistInfo> => lastFm.getArtistInfo(artist).then((res): ArtistInfo => res.artist),
      ),
    ),
);

interface ArtistBase {
  url: string;
  name: string;
  mbid: string;
}

const artistLoader: DataLoader<string, ArtistBase> = new DataLoader(
  (artists: string[]): Promise<ArtistBase[]> =>
    Promise.all(artists.map((artist: string): Promise<ArtistBase> => artistInfoLoader.load(artist))),
);

const topAlbumsLoader: DataLoader<string, TopAlbum[]> = new DataLoader(
  (usernames: string[]): Promise<TopAlbum[][]> =>
    Promise.all(
      usernames.map(
        (username: string): Promise<TopAlbum[]> =>
          lastFm.getTopAlbums(username).then(
            ({ topalbums }): TopAlbum[] => {
              topalbums.album.forEach(
                (album): void => {
                  artistLoader.prime(album.artist.name, album.artist);
                },
              );
              return topalbums.album;
            },
          ),
      ),
    ),
);

const trackLoader: DataLoader<{ trackName: string; artistName: string }, TrackInfo> = new DataLoader(
  (tracks: { trackName: string; artistName: string }[]): Promise<TrackInfo[]> =>
    Promise.all(
      tracks.map((track): Promise<TrackInfo> => lastFm.getTrackInfo(track).then((res): TrackInfo => res.track)),
    ),
);

export default {
  artistInfoLoader,
  artistLoader,
  topTrackLoader,
  topArtistsLoader,
  topAlbumsLoader,
  trackLoader,
};
