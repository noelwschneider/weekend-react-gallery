import GalleryItem from "./GalleryItem"
import { useState, useEffect } from 'react'
import axios from 'axios'

import { ImageList } from "@mui/material"


function GalleryList() {

    const [gallery, setGallery] = useState([])

    const getGallery = () => {
        axios.get('/gallery')
        .then( response => {
            setGallery(response.data)
        })
        .catch( error => {
            console.log('error in GET', error)
        })
    }

    useEffect( () => {
        getGallery()
    }, [])

    gallery.map( pic => {
        console.log(pic.description)
    })

    return (<>
        <ImageList className="image-list" variant="masonry" gap="0">
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