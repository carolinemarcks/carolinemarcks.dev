import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import Main from '../components/Main';
import topTracks from '../queries';
import { TopTracks, TopTracks_user, TopTracks_user_topTracks_image } from '../generated/TopTracks';

class TopTracksQuery extends Query<TopTracks> {}

const Loading = (): JSX.Element => <p>Loading ...</p>;
const Error = (): JSX.Element => (
  <p>
    Couldn&apos;t load my top tracks. Check me out on <a href="https://www.last.fm/user/cmarcksthespot">last.fm</a>{' '}
    instead
  </p>
);

const Tracks = ({ user }: { user: TopTracks_user }): JSX.Element => (
  <div>
    {user.topTracks
      .reduce<{ alt: string; src: string }[]>((accum, track): { alt: string; src: string }[] => {
        const image = track.image.find((i: TopTracks_user_topTracks_image): boolean => i.size === 'extralarge');
        if (!image) return accum;
        return [...accum, { alt: track.name, src: image.url }];
      }, [])
      .map(
        ({ alt, src }): JSX.Element => (
          <img key={alt} src={src} alt={alt} />
        ),
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
