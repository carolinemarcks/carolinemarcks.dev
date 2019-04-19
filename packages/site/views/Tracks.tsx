import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import queries from '../queries';
import { TopTracks, TopTracks_user } from '../generated/TopTracks';
import MusicItem from '../components/MusicItem';
import MusicPage from '../components/MusicPage';

class TopTracksQuery extends Query<TopTracks> {}

const Loading = (): JSX.Element => <p>Loading...</p>;
const Error = (): JSX.Element => (
  <p>
    Couldn&apos;t load. Check me out on <a href="https://www.last.fm/user/cmarcksthespot">last.fm</a> instead
  </p>
);

const imageSortOrder = ['extralarge', 'large', 'medium', 'small'];
const imageSort = (a: { size: string }, b: { size: string }): number =>
  imageSortOrder.indexOf(a.size) - imageSortOrder.indexOf(b.size);

const TrackData = ({ user }: { user: TopTracks_user }): JSX.Element => (
  <div className="row" style={{ justifyContent: 'center' }}>
    {user.topTracks.map(
      ({ album, url, name, artist }): JSX.Element | null => {
        const albumImages: string[] = album ? album.image.sort(imageSort).map((i): string => i.url) : [];
        const images = [
          ...albumImages.filter((i): boolean => i.length > 0),
          '/packages/site/static/theme/images/overlay.png',
        ];
        return <MusicItem images={images} url={url} title={name} subtitle={artist.name} key={name} />;
      },
    )}
  </div>
);

const Tracks = (): JSX.Element => (
  <MusicPage category="tracks">
    <TopTracksQuery query={queries.topTracks}>
      {({ loading, error, data }: QueryResult<TopTracks>): JSX.Element => {
        if (loading) return <Loading />;
        if (error || !data || !data.user) return <Error />;
        return <TrackData user={data.user} />;
      }}
    </TopTracksQuery>
  </MusicPage>
);

export default Tracks;
