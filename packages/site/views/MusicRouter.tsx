import React from 'react';
import { Route } from 'react-router-dom';
import Tracks from './Tracks';
import Albums from './Albums';

const MusicRouter = (): JSX.Element[] => [
  <Route path="/music" key="/music" component={Tracks} exact />,
  <Route path="/music/tracks" key="/music/tracks" component={Tracks} exact />,
  <Route path="/music/albums" key="/music/albums" component={Albums} exact />,
];

export default MusicRouter;
