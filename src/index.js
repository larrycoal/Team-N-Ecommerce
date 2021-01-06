import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Admin from './Components/Admin'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path ="/admin" component={Admin}/>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


