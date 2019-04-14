import DataLoader from "dataloader";
import lastFm from "./lastfm";
import { ArtistDetail, Track } from "./models";

const topTrackLoader: DataLoader<string, Track[]> = new DataLoader(usernames =>
  Promise.all(usernames.map(username => lastFm.getTopTracksForUser(username)))
);

const artistLoader: DataLoader<string, ArtistDetail> = new DataLoader(artists =>
  Promise.all(artists.map(artist => lastFm.getArtistInfo(artist)))
);

export default {
  artistLoader,
  topTrackLoader
};
