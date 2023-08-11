import axios from 'axios'
import { useState } from 'react'

// Styling
import { Button, Typography } from '@mui/material'

function GalleryItem(pic) {

    // NOTE TO SELF: REVIEW WHY THIS WORKS
        // IT DONT MAKE NO SENSE TO ME
            // THE CONCEPTS ARE SO LARGE AND I AM SO SMALL
    const [descMode, setDescMode] = useState(false)
    function showDescription() {
        setDescMode(!descMode)
    }
    
    function likeImage() {

        axios.put(`/gallery/like/${pic.id}`, pic)
        .then( response => {
            pic.getGallery()
        })
        .catch( error => {
            console.log('error in put', error)
        })
    }

    return (<>
        <div className="image-container">
            {descMode
                ? <p onClick={showDescription}>{pic.description}</p>
                : <img width="400" height="200" onClick={showDescription} src={pic.path}/>
            }
            <Button variant="contained" onClick={likeImage}>Like</Button>
            <p>{pic.likes} people liked this</p>
        </div>
    </>)
}

export default GalleryItem