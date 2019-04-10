import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import UrlBeranda from './Beranda';
import UrlNotExist from './UrlNotExist';
import UrlPhotoAlbum from './UrlGallery';
import UrlHubungiKami from './UrlHubungiKami';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={UrlBeranda} />
          <Route exact path="/oke" component={UrlPhotoAlbum} />
          <Route exact path="/hubungikami" component={UrlHubungiKami} />
          <Route component={UrlNotExist} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
