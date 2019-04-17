import DataLoader from 'dataloader';
import lastFm from './lastfm';
import { ArtistDetail, Track, TrackDetail } from './models';

const topTrackLoader: DataLoader<string, Track[]> = new DataLoader(
  (usernames: string[]): Promise<Track[][]> =>
    Promise.all(usernames.map((username: string): Promise<Track[]> => lastFm.getTopTracksForUser(username))),
);

const artistLoader: DataLoader<string, ArtistDetail> = new DataLoader(
  (artists: string[]): Promise<ArtistDetail[]> =>
    Promise.all(artists.map((artist: string): Promise<ArtistDetail> => lastFm.getArtistInfo(artist))),
);
const trackLoader: DataLoader<{ trackName: string; artistName: string }, TrackDetail> = new DataLoader(
  (tracks: { trackName: string; artistName: string }[]): Promise<TrackDetail[]> =>
    Promise.all(tracks.map((track): Promise<TrackDetail> => lastFm.getTrackInfo(track))),
);

export default {
  artistLoader,
  topTrackLoader,
  trackLoader,
};
