import GalleryItem from "./GalleryItem"
import { useState, useEffect } from 'react'
import axios from 'axios'


function GalleryList() {

    const [gallery, setGallery] = useState([])

    useEffect( () => {
        axios.get('/gallery')
        .then( response => {
            setGallery(response.data)
        })
        .catch( error => {
            console.log('error in GET', error)
        })
    }, [])

    return (<>
        <GalleryItem />
    </>)
}

export default GalleryList