import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
// import Login from './Login/Login'


function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Switch>
        <Route exact path="/" component={Login}/>
        {/* <Route exact path="/login" component={Login}/> */}
        <Route path="/home" component={Home}/>
        {/* <Route path="*" component={NotFound}/> */}
      </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
