import React, { Component } from 'react';

class GalleryItem extends Component {
    

    render() {
        // variable to set pictures
        let galleryItem = this.props.galleryItem;

        return(
            <div className="galleryItems">
                <img src={galleryItem.path} alt="" />
            </div>
        )
    }
}

export default GalleryItem;