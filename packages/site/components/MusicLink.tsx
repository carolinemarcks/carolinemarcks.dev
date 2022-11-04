import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ApolloConsumer, ApolloClient } from '@apollo/client';
import { DocumentNode } from 'graphql';
import queries from '../queries';

export type MusicCategory = 'tracks' | 'artists' | 'albums';

function CategoryLink({
  selected,
  link,
  query,
  children,
}: {
  selected?: MusicCategory;
  link: MusicCategory;
  query: DocumentNode;
  children: ReactNode;
}): JSX.Element {
  const style = selected && selected === link ? { color: '#787878', borderBottom: 'double' } : {};
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const prefetch = (client: ApolloClient<any>): void => {
    client.query({ query });
  };
  return (
    <ApolloConsumer>
      {(client): JSX.Element => (
        <Link
          to={`/music/${link}`}
          style={style}
          onFocus={(): void => prefetch(client)}
          onMouseOver={(): void => prefetch(client)}
        >
          {children}
        </Link>
      )}
    </ApolloConsumer>
  );
}

interface MusicLinkProps {
  selected?: MusicCategory;
  children: ReactNode;
}
function ArtistsLink({ selected, children }: MusicLinkProps): JSX.Element {
  return (
    <CategoryLink selected={selected} link="artists" query={queries.topArtists}>
      {children}
    </CategoryLink>
  );
}

function AlbumsLink({ selected, children }: MusicLinkProps): JSX.Element {
  return (
    <CategoryLink selected={selected} link="albums" query={queries.topAlbums}>
      {children}
    </CategoryLink>
  );
}

function TracksLink({ selected, children }: MusicLinkProps): JSX.Element {
  return (
    <CategoryLink selected={selected} link="tracks" query={queries.topTracks}>
      {children}
    </CategoryLink>
  );
}

export default {
  ArtistsLink,
  AlbumsLink,
  TracksLink,
};
