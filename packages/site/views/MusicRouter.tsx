import React from 'react';
import { Route } from 'react-router-dom';
import Tracks from './Tracks';

const MusicRouter = (): JSX.Element[] => [
  <Route path="/music" key="/music" component={Tracks} exact />,
  <Route path="/music/tracks" key="/music/tracks" component={Tracks} exact />,
];

export default MusicRouter;
