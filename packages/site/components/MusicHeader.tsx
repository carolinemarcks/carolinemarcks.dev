import React from 'react';
import MusicLink, { MusicCategory } from './MusicLink';

const MusicHeader = ({ selected }: { selected: MusicCategory }): JSX.Element => (
  <div className="row" style={{ paddingBottom: '20px' }}>
    <div>
      <MusicLink.AlbumsLink selected={selected}>albums</MusicLink.AlbumsLink>
    </div>
    <div>|</div>
    <div>
      <MusicLink.ArtistsLink selected={selected}>artists</MusicLink.ArtistsLink>
    </div>
    <div>|</div>
    <div>
      <MusicLink.TracksLink selected={selected}>tracks</MusicLink.TracksLink>
    </div>
  </div>
);

export default MusicHeader;
