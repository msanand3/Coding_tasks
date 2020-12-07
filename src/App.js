import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Head from './components/head';
import Main from './components/main';


function App() {
  return (
    <Router>
      <Head/>
      <Switch >
        <Route exact path = "/" component = { Main}/> 
      </Switch>
  </Router>
  );
}

export default App;
