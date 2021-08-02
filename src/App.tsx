import React, {useState} from 'react';
import './App.css';
import {routes} from "./routes";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Auth} from "./components/Auth-Register/Auth";
import {Main} from "./components/Main/Main";
import {Register} from "./components/Auth-Register/Register";

function App() {
    // @ts-ignore
    const route = routes(true)

  return ( <div className="App">
          <BrowserRouter>
              {route}
          </BrowserRouter>

      </div>
  );
}

export default App;
