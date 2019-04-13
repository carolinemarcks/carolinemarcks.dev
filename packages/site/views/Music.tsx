import React from 'react';
import { Query } from 'react-apollo';
import Main from '../components/Main';
import { topTracks } from '../queries';
import { TopTracks, TopTracks_user_topTracks } from '../generated/TopTracks';

class TopTracksQuery extends Query<TopTracks> {}

const Music = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Music</h2>
        </div>
      </header>
      <TopTracksQuery query={topTracks}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error || !data || !data.user)
            return (
              <p>
                Couldn't load my top tracks. Check me out on{' '}
                <a href="https://www.last.fm/user/cmarcksthespot">last.fm</a>{' '}
                instead
              </p>
            );
          return data.user.topTracks
            .reduce<{ alt: string; src: string }[]>((accum, track) => {
              const image = track.image.find(i => i.size === 'extralarge');
              if (!image) return accum;
              return [...accum, { alt: track.name, src: image.url }];
            }, [])
            .map(({ alt, src }) => <img key={alt} src={src} alt={alt} />);
        }}
      </TopTracksQuery>
    </article>
  </Main>
);

export default Music;
