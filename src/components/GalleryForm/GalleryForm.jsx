import React, { Component } from 'react';

class GalleryForm extends Component {


    render() {
        return (
            <>
                <section>
                    <form onSubmit={this.props.handleSubmit}>
                        <label>Picture URL:</label>
                        <input type="text" name="path" value={this.props.newGalleryItem.path}
                            onChange={(event) => this.props.handleGalleryItem(event, 'path')} />
                        <label>Description</label>
                        <input type="text" name="description" value={this.props.newGalleryItem.description}
                               onChange={(event) => this.props.handleGalleryItem(event, 'description')}/>
                        <button type="submit">Add Item</button>
                    </form>
                </section>
            </>
        )
    }
}

export default GalleryForm