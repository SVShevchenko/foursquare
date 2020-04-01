import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import VenueDetails from '../pages/VenueDetails';

export default function RootRouter() {

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/venue/:venue_id/" component={VenueDetails} />
    </Switch>
  );
}
