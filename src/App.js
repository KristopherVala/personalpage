import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { About } from './About';
import { Projects } from './Projects';
import { NoMatch } from './NoMatch';
import {Layout} from './components/Layout';
import {NaviBar} from './components/NaviBar';
import {JumboHome} from './components/JumboHome';

class App extends Component{
  render(){

  return (

<React.Fragment >
  <NaviBar/>
  <JumboHome/>
    <Layout >  
    <Router>
      <Switch>
      <Route exact path="/" component={Home}/> 
      <Route path="/About" component={About}/> 
      <Route path="/Projects" component={Projects}/> 
      <Route component={NoMatch}> </Route>
  </Switch>
  
  </Router>


</Layout>
</React.Fragment>

  );
}
}

export default App;
