import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import Main from '../components/Main';
import topTracks from '../queries';
import { TopTracks, TopTracks_user } from '../generated/TopTracks';
import Track from '../components/Track';

class TopTracksQuery extends Query<TopTracks> {}

const Loading = (): JSX.Element => <p>Loading ...</p>;
const Error = (): JSX.Element => (
  <p>
    Couldn&apos;t load my top tracks. Check me out on <a href="https://www.last.fm/user/cmarcksthespot">last.fm</a>{' '}
    instead
  </p>
);

const imageSortOrder = ['extralarge', 'large', 'medium', 'small'];
const imageSort = (a: { size: string }, b: { size: string }): number =>
  imageSortOrder.indexOf(a.size) - imageSortOrder.indexOf(b.size);

const Tracks = ({ user }: { user: TopTracks_user }): JSX.Element => (
  <div className="row" style={{ justifyContent: 'center' }}>
    {user.topTracks.map(
      ({ album, url, name, artist }): JSX.Element | null => {
        const albumImages: string[] = album ? album.image.sort(imageSort).map((i): string => i.url) : [];
        const images = [
          ...albumImages.filter((i): boolean => i.length > 0),
          '/packages/site/static/theme/images/overlay.png',
        ];
        const track = { images, url, name, artist: artist.name };
        return <Track track={track} key={name} />;
      },
    )}
  </div>
);

const Music = (): JSX.Element => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Music</h2>
        </div>
      </header>
      <TopTracksQuery query={topTracks}>
        {({ loading, error, data }: QueryResult<TopTracks>): JSX.Element => {
          if (loading) return <Loading />;
          if (error || !data || !data.user) return <Error />;
          return <Tracks user={data.user} />;
        }}
      </TopTracksQuery>
    </article>
  </Main>
);

export default Music;
