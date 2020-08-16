import React, { Component } from 'react';

class GalleryItem extends Component {
    // showing picture boolean
    state = {
        ifPicture: true,
        ifLike: true,
    }
    // I was trying to figure out a last minute conditional to adding text to likes
    // ifLikesAre = () => {
    //     if (this.props.galleryItem.likes === 0) {
    //         this.setState({
    //             ifLike: true
    //         })
    //     } else {
    //         this.setState({
    //             ifLike: false
    //         })
    //     }

    // }

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
                <section>
                    <div className="galleryItems" onClick={this.togglePicture}>
                        {this.state.ifPicture ?
                            <img src={galleryItem.path} alt="" /> :
                            <span className="description">
                                {galleryItem.description}
                            </span>
                        }
                    </div>
                    <br />
                    <p>{galleryItem.likes} Love this!</p>
                    
                    {/* like button */}
                    

                    <div><button
                        className="likeBtn"
                        onClick={() => this.props.likeCounter(galleryItem.id)}
                    >
                        Like
                    </button>
                    </div>
                </section>

            </>

        )
    }
}

export default GalleryItem;