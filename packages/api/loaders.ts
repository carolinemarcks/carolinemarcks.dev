import DataLoader from 'dataloader';
import lastFm, { ArtistInfo, TrackInfo, TopTrack } from './lastfm';

const topTrackLoader: DataLoader<string, TopTrack[]> = new DataLoader(
  (usernames: string[]): Promise<TopTrack[][]> =>
    Promise.all(
      usernames.map(
        (username: string): Promise<TopTrack[]> =>
          lastFm.getTopTracks(username).then(({ toptracks }): TopTrack[] => toptracks.track),
      ),
    ),
);

const artistLoader: DataLoader<string, ArtistInfo> = new DataLoader(
  (artists: string[]): Promise<ArtistInfo[]> =>
    Promise.all(
      artists.map(
        (artist: string): Promise<ArtistInfo> => lastFm.getArtistInfo(artist).then((res): ArtistInfo => res.artist),
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
  artistLoader,
  topTrackLoader,
  trackLoader,
};
