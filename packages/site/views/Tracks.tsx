import React from 'react';
import MusicItem from '../components/MusicItem';
import MusicPage from '../components/MusicPage';
import { useTopTracksQuery } from '../generated/graphql';

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
  const { loading, error, data } = useTopTracksQuery();

  if (loading) return <Loading />;
  if (error || !data || !data.user) return <Error />;
  const { user } = data;
  return (
    <div className="row" style={{ justifyContent: 'center' }}>
      {user.topTracks.map(({ album, url, name, artist }): JSX.Element | null => {
        const albumImages: string[] = album ? album.image.sort(imageSort).map((i): string => i.url) : [];
        const images = [
          ...albumImages.filter((i): boolean => i.length > 0),
          '/packages/site/static/theme/images/overlay.png',
        ];
        return <MusicItem images={images} url={url} title={name} subtitle={artist.name} key={name} />;
      })}
    </div>
  );
}

function Tracks(): JSX.Element {
  return (
    <MusicPage category="tracks">
      <PageContents />
    </MusicPage>
  );
}

export default Tracks;
