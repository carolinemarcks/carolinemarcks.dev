import React from 'react';
import { Link } from 'react-router-dom';

type MusicCategory = 'tracks' | 'artists' | 'albums';

const CategoryLink = ({ selected, link }: { selected: MusicCategory; link: MusicCategory }): JSX.Element => {
  const style = selected === link ? { color: '#787878', borderBottom: 'double' } : {};
  return (
    <Link to={`/music/${link}`} style={style}>
      {link}
    </Link>
  );
};

const MusicHeader = ({ selected }: { selected: MusicCategory }): JSX.Element => (
  <div className="row" style={{ paddingBottom: '20px' }}>
    <div>
      <CategoryLink selected={selected} link="artists" />
    </div>
    <div>|</div>
    <div>
      <CategoryLink selected={selected} link="albums" />
    </div>
    <div>|</div>
    <div>
      <CategoryLink selected={selected} link="tracks" />
    </div>
  </div>
);

export default MusicHeader;
