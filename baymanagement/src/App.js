import React, { Component } from 'react';
import { Link, BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Search from './Search.js'
import Add from './Add.js'
import LoadBay from './LoadBay.js'
import LoadPallet from './LoadPallet.js'
import EditPallet from './EditPallet.js'
import EditBay from './EditBay.js'
import PBLink from './PBLink.js'
import ManageSubs from './ManageSubs.js';

class App extends Component {

  constructor(props) {
    super()
  }

  render() {
    return (

      <div className="App">
      <div className="routed">
      <header className="App-header">
    
    <Link to="/"><h1 className="App-title">Overhead Bay Manager</h1></Link>
    <div className="container">
    <div className="row">

    <switch>
    <div className="col-sm-6 col-sm-offset-3">
      <div className="col-xs-6 headerButton"><Link to="/search">Search</Link></div>
      {/* <div className="col-xs-4 logo"><img src={require('./images/logo.jpg')} /></div> */}
      <div className="col-xs-6 headerButton"><Link to="/add">Add</Link></div>
    </div>
    </switch>

    </div>
    </div>

    </header>


    <Route exact path="/add" component={ Add } />
    <Route exact path="/search" component={ Search } />
    <Route path="/load/P*" component={ LoadPallet } />
    <Route path="/load/B*" component={ LoadBay } />
    <Route path="/edit/P*" component={ EditPallet } />
    <Route path="/edit/B*" component={ EditBay } />
    <Route path="/pblink/*" component={ PBLink } />
    <Route path="/managesubs" component={ ManageSubs } />   
  

    <Route exact path ="/" render={() =>
      <p className="App-intro">
      This is going to tell you all about the bays.
      </p>
    } />

    </div>
    </div>
    );
  }
}

export default App;
