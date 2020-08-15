import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';

class App extends Component {

  state = {
    gallery: []
  }

  componentDidMount() {
    this.getGalleryItems();
  }
  // request for our galary items
  getGalleryItems = () => {
    axios.get('/gallery')
      .then(response => {
        console.log(response.data);
        // inputing gallery items into gallery
        this.setState({
          gallery: response.data
        })
      })
      .catch(error => {
        alert('Error in GET request')
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br/>
        <p>Gallery goes here</p>
        <GalleryList gallery={this.state.gallery}/>
      </div>
    );
  }
}

export default App;
