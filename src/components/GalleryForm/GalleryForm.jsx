import React, { Component } from 'react';

class GalleryForm extends Component {


    render() {
        return(
            <>
            <form>
                <label>Picture URL:</label>
                <input type="text" name="url" 
                        />
                <label>Description</label>
                <input type="text" name="description" 
                        />
                <button type="submit">Add Item</button>
            </form>
            </>
        )
    }
}

export default GalleryForm