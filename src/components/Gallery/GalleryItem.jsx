import axios from 'axios'
import { useState } from 'react'



// Styling
import { Button } from '@mui/material'
import {ImageListItem} from '@mui/material'
import {Container, Grid} from '@mui/material'

function GalleryItem(pic) {

    let charCount = pic.description.length

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
              ? <ImageListItem key={pic.id} onClick={showDescription}>
                    <p className="description">{pic.description}</p>
                    <img className="descMode" width="400" height="200"  src={pic.path}/>
                    <Button variant="contained" onClick={likeImage}>Like ({pic.likes})</Button>
                </ImageListItem>   
              : <ImageListItem key={pic.id}>
                    <img width="400" height="200" onClick={showDescription} src={pic.path}/>
                    <Button variant="contained" onClick={likeImage}>Like ({pic.likes})</Button>
                </ImageListItem>
            }
        </div>
    </>)
}

export default GalleryItem