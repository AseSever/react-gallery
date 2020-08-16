import React, { Component } from 'react';

class GalleryItem extends Component {
    // showing picture boolean
    state = {
        isPicture: true
    }

    togglePicture = () => {
        console.log('click');
        this.setState({
            isPicture: !this.state.isPicture
        });
    }

    // toDescription = () => {
    //     this.state.isPicture ? galleryItemImg : itemDescription
    // }

    render() {
        // variable to set pictures
        let galleryItemImg = this.props.galleryItem.path;
        let itemDescription = this.props.galleryItem.description;

        return (
            <>
                <div className="galleryItems" onClick={this.togglePicture}>
                
                    {this.state.isPicture ?
                        <img src={galleryItemImg} alt="" /> :
                        <p>{itemDescription}</p>
                    }
                </div>
                {/* <button>Like</button> */}
            </>
        )
    }
}

export default GalleryItem;