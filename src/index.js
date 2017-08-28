import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import SearchA from "./SearchA";
import SearchB from "./SearchB";

ReactDOM.render((
  <Router>
    <div>
      <Route exact path="/" component={SearchA}/>
      <Route path="/searchA" component={SearchA}/>
      <Route path="/searchB" component={SearchB}/>
    </div>
  </Router>
), document.getElementById('root'));
