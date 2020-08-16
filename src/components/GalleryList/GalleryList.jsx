import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {

    render() {
        return (
            <div className="container">
                {this.props.gallery.map(galleryItem => {
                    return (
                        // sourced items into GalleryItems
                        <GalleryItem 
                            key={galleryItem.id} 
                            galleryItem={galleryItem}
                        />
                    )
                })}
            </div>
        )
    }
}

export default GalleryList;