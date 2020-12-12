import React from "react";
import './app.css';

import Homepage from './components/pages/HomePage/Hompage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
        <Router>
            <Homepage />
            <Switch>
                <Route to="/" />
            </Switch>

        </Router>

  );
}

export default App;
