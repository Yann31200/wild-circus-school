import React from 'react';
import TopNavBar from './components/TopNavBar';
import FormationPage from './components/FormationPage';
import FormInscription from './components/FormInscription';
import { Switch, Route } from 'react-router-dom';
import PageAccueil from './components/PageAccueil';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/formation">
          <TopNavBar />
          <FormationPage />
        </Route>
        <Route path="/inscription">
          <TopNavBar />
          <FormInscription />
        </Route>
        <Route exact path="/">
          <TopNavBar />
          <PageAccueil />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
