import React, { Component } from 'react';

class GalleryItem extends Component {
    // showing picture boolean
    state = {
        ifPicture: true
    }

    togglePicture = () => {
        console.log('click');
        this.setState({
            ifPicture: !this.state.ifPicture
        });
    }


    render() {
        // variable to set pictures and description
        let galleryItem = this.props.galleryItem;


        return (
            <>
                <div className="galleryItems" onClick={this.togglePicture}>
                    {this.state.ifPicture ?
                        <img src={galleryItem.path} alt="" /> :
                        <span className="description">{galleryItem.description}</span>
                    }
                </div>
                <br/>
                
                <p>{this.props.galleryItem.likes}</p>
                {/* like button */}
                <br/>
                <div><button
                        className="likeBtn"
                        onClick={() => this.props.likeCounter(galleryItem.id)}
                    >
                        Like
                </button>
                </div>

            </>

        )
    }
}

export default GalleryItem;