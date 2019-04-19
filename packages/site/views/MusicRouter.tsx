import React from 'react';
import { Route } from 'react-router-dom';
import Tracks from './Tracks';
import Albums from './Albums';
import Artists from './Artists';

const MusicRouter = (): JSX.Element[] => [
  <Route path="/music" key="/music" component={Artists} exact />,
  <Route path="/music/tracks" key="/music/tracks" component={Tracks} exact />,
  <Route path="/music/albums" key="/music/albums" component={Albums} exact />,
  <Route path="/music/artists" key="/music/artists" component={Artists} exact />,
];

export default MusicRouter;
