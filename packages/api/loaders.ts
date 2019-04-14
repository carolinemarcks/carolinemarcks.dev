import DataLoader from 'dataloader';
import lastFm from './lastfm';
import { ArtistDetail, Track } from './models';

const topTrackLoader: DataLoader<string, Track[]> = new DataLoader(
  (usernames: string[]): Promise<Track[][]> =>
    Promise.all(usernames.map((username: string): Promise<Track[]> => lastFm.getTopTracksForUser(username))),
);

const artistLoader: DataLoader<string, ArtistDetail> = new DataLoader(
  (artists: string[]): Promise<ArtistDetail[]> =>
    Promise.all(artists.map((artist: string): Promise<ArtistDetail> => lastFm.getArtistInfo(artist))),
);

export default {
  artistLoader,
  topTrackLoader,
};
