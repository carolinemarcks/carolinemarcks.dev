import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import queries from '../queries';
import { TopArtists, TopArtists_user } from '../generated/TopArtists';
import MusicItem from '../components/MusicItem';
import MusicPage from '../components/MusicPage';

class TopArtistsQuery extends Query<TopArtists> {}

const Loading = (): JSX.Element => <p>Loading...</p>;
const Error = (): JSX.Element => (
  <p>
    Couldn&apos;t load. Check me out on <a href="https://www.last.fm/user/cmarcksthespot">last.fm</a> instead
  </p>
);

const imageSortOrder = ['extralarge', 'large', 'medium', 'small'];
const imageSort = (a: { size: string }, b: { size: string }): number =>
  imageSortOrder.indexOf(a.size) - imageSortOrder.indexOf(b.size);

const ArtistData = ({ user }: { user: TopArtists_user }): JSX.Element => (
  <div className="row" style={{ justifyContent: 'center' }}>
    {user.topArtists.map(
      ({ image, name, url }): JSX.Element | null => {
        const images = [
          ...image
            .sort(imageSort)
            .map((i): string => i.url)
            .filter((i): boolean => i.length > 0),
          '/packages/site/static/theme/images/overlay.png',
        ];
        return <MusicItem images={images} url={url} title={name} key={name} />;
      },
    )}
  </div>
);

const Artists = (): JSX.Element => (
  <MusicPage category="artists">
    <TopArtistsQuery query={queries.topArtists}>
      {({ loading, error, data }: QueryResult<TopArtists>): JSX.Element => {
        if (loading) return <Loading />;
        if (error || !data || !data.user) return <Error />;
        return <ArtistData user={data.user} />;
      }}
    </TopArtistsQuery>
  </MusicPage>
);

export default Artists;
