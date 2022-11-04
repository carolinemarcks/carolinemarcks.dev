import React from 'react';
import MusicItem from '../components/MusicItem';
import MusicPage from '../components/MusicPage';
import { useTopAlbumsQuery } from '../generated/graphql';

function Loading(): JSX.Element {
  return <p>Loading...</p>;
}
function Error(): JSX.Element {
  return (
    <p>
      Couldn&apos;t load. Check me out on <a href="https://www.last.fm/user/cmarcksthespot">last.fm</a> instead
    </p>
  );
}

const imageSortOrder = ['extralarge', 'large', 'medium', 'small'];
const imageSort = (a: { size: string }, b: { size: string }): number =>
  imageSortOrder.indexOf(a.size) - imageSortOrder.indexOf(b.size);

function PageContents(): JSX.Element {
  const { loading, error, data } = useTopAlbumsQuery();
  if (loading) return <Loading />;
  if (error || !data || !data.user) return <Error />;

  const { user } = data;

  return (
    <div className="row" style={{ justifyContent: 'center' }}>
      {user.topAlbums.map(({ image, name, artist, url }): JSX.Element | null => {
        const images = [
          ...image
            .sort(imageSort)
            .map((i): string => i.url)
            .filter((i): boolean => i.length > 0),
          '/packages/site/static/theme/images/overlay.png',
        ];
        return <MusicItem images={images} url={url} title={name} subtitle={artist.name} key={name} />;
      })}
    </div>
  );
}

function Albums(): JSX.Element {
  return (
    <MusicPage category="albums">
      <PageContents />
    </MusicPage>
  );
}

export default Albums;
