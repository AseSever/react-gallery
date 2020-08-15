import React, { Component } from 'react';

class GalleryList extends Component {

    render() {
        return (
            <div class="galleryList">
                {this.props.gallery.map(galleryItem => {
                    return (
                        <img src={galleryItem.path} alt=""/>
                    )
                })}
            </div>
        )
    }
}

export default GalleryList;