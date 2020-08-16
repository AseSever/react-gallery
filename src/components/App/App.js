import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import GalleryForm from '../GalleryForm/GalleryForm';

class App extends Component {

  state = {
    gallery: [],
    newGalleryItem: {
      path: '',
      description: '',
      likes: 0
    }
  }

  componentDidMount() {
    this.getGalleryItems();
  }
  // setting state to make new gallery object
  handleGalleryItem = (event, propertyName) => {
    console.log(`Changeing ${propertyName}`);

    this.setState({
      newGalleryItem: {
        ...this.state.newGalleryItem,
        [propertyName]: event.target.value
      }
    });

  }

  // handle for click event
  handleSubmit = (event) => {
    event.preventDefault();
    this.addGalleryItem();
  }

  //post request for gallery item
  addGalleryItem = () => {
    axios.post('/gallery', this.state.newGalleryItem)
      .then(response => {
        this.getGalleryItems();
        this.setState({
          newGalleryItem: {
            path: '',
            description: '',
          }
        })
      })
      .catch(error => {
        alert('Error with request to add gallery item');
        console.log('Error with POST request', error);
      });
  }

  // request for our galary items
  getGalleryItems = () => {
    axios.get('/gallery')
      .then(response => {
        // console.log(response.data);
        // inputing gallery items into gallery
        this.setState({
          gallery: response.data
        })
      })
      .catch(error => {
        alert('Error in GET request')
      });
  }
  // put route for counting likes
  likeCounter = (id) => {
    axios.put(`/gallery/like/${id}`)
      .then(response => {
        this.getGalleryItems();
      })
      .catch(error => {
        alert('error in PUT request')
        console.log(error);

      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of my life</h1>
        </header>
        <br />
        <GalleryForm 
          handleGalleryItem={this.handleGalleryItem}
          newGalleryItem={this.state.newGalleryItem}
          handleSubmit={this.handleSubmit}
        />
        <br/>
        <GalleryList 
          gallery={this.state.gallery}
          likeCounter={this.likeCounter}
        />
      </div>
    );
  }
}

export default App;
