// Dependencies(?)
import { useState, useEffect } from 'react'
import axios from 'axios'

// Styling
import { ImageList } from "@mui/material"

// Components
import GalleryItem from "./GalleryItem"

// Export function
function GalleryList() {
    // Array to hold picture objects
    const [gallery, setGallery] = useState([])

    // GET Route
    const getGallery = () => {
        axios.get('/gallery')
        .then( response => {
            setGallery(response.data)
        })
        .catch( error => {
            console.log('error in GET', error)
        })
    }

    // Rendering image list at initial page load
    useEffect( () => {
        getGallery()
    }, [])

    // Return image list with a list item for each tweet in the database
    return (<>
        <ImageList className="image-list" variant="masonry" gap={0}>
            {gallery.map( pic => (
                <GalleryItem 
                    key={pic.id} 
                    id={pic.id} 
                    path={pic.path} 
                    description={pic.description} 
                    likes={pic.likes} 
                    getGallery={getGallery} 
                    descMode={pic.descMode}/>
            ))}
        </ImageList>
    </>)
}

export default GalleryList