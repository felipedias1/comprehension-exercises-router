import React, { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import About from './components/About'
import Users from './components/Users'
import StrictAccess from './components/StrictAccess'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route path="/Users/:id" render = {(props)=> <Users {...props} greetingsMessage="Good Morning"/>} />
          <Route path="/StrictAccess" 
            render ={ () => ( 
              <StrictAccess user={
                {username:'joao', 
                password:'1234'}}/>
            )} 
          />
          <Route path="/About" component ={About} />
          <Route exact path="/" component ={Home} /> 
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
