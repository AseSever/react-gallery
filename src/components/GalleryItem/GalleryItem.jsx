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

   
    render() {
        // variable to set pictures and description
        let galleryItem = this.props.galleryItem;
        

        return (
            <>
                <div className="galleryItems" onClick={this.togglePicture}>
                    {this.state.isPicture ? 
                        <img src={galleryItem.path} alt="" /> : <span>{galleryItem.description}</span>
                    }
                </div>
                <p>{this.props.galleryItem.likes}</p><br/>
                <button className="likeBtn" onClick={() => this.props.likeCounter(galleryItem.id)}>Like</button><br/>
            </>

        )
    }
}

export default GalleryItem;