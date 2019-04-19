import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import queries from '../queries';
import { TopAlbums, TopAlbums_user } from '../generated/TopAlbums';
import MusicItem from '../components/MusicItem';
import MusicPage from '../components/MusicPage';

class TopAlbumsQuery extends Query<TopAlbums> {}

const Loading = (): JSX.Element => <p>Loading...</p>;
const Error = (): JSX.Element => (
  <p>
    Couldn&apos;t load. Check me out on <a href="https://www.last.fm/user/cmarcksthespot">last.fm</a> instead
  </p>
);

const imageSortOrder = ['extralarge', 'large', 'medium', 'small'];
const imageSort = (a: { size: string }, b: { size: string }): number =>
  imageSortOrder.indexOf(a.size) - imageSortOrder.indexOf(b.size);

const AlbumData = ({ user }: { user: TopAlbums_user }): JSX.Element => (
  <div className="row" style={{ justifyContent: 'center' }}>
    {user.topAlbums.map(
      ({ image, name, artist, url }): JSX.Element | null => {
        const images = [
          ...image
            .sort(imageSort)
            .map((i): string => i.url)
            .filter((i): boolean => i.length > 0),
          '/packages/site/static/theme/images/overlay.png',
        ];
        return <MusicItem images={images} url={url} title={name} subtitle={artist.name} key={name} />;
      },
    )}
  </div>
);

const Albums = (): JSX.Element => (
  <MusicPage category="albums">
    <TopAlbumsQuery query={queries.topAlbums}>
      {({ loading, error, data }: QueryResult<TopAlbums>): JSX.Element => {
        if (loading) return <Loading />;
        if (error || !data || !data.user) return <Error />;
        return <AlbumData user={data.user} />;
      }}
    </TopAlbumsQuery>
  </MusicPage>
);

export default Albums;
