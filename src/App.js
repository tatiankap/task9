import React from 'react';
import { Route, Switch } from "react-router-dom";
import EdditPage from './components/pages/Eddit';
import CardPage from './components/pages/CardPage';

function App() {
  return (
    <Switch>
      <Route path='/' component={CardPage} exact></Route>
      <Route path='/add' component={EdditPage} exact></Route>
    </Switch>
  );
}

export default App;
