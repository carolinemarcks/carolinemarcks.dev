import React from 'react';
import { Route } from 'react-router-dom';
import Tracks from './Tracks';
import Albums from './Albums';
import Artists from './Artists';

const MusicRouter = (): JSX.Element[] => [
  <Route path="/music" key="/music" element={<Albums />} />,
  <Route path="/music/tracks" key="/music/tracks" element={<Tracks />} />,
  <Route path="/music/albums" key="/music/albums" element={<Albums />} />,
  <Route path="/music/artists" key="/music/artists" element={<Artists />} />,
];

export default MusicRouter;
