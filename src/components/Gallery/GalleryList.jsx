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

    console.log(gallery)
    gallery.map( pic => {
        console.log(pic.description)
    })

    return (<>
        {gallery.map( pic => (
            <GalleryItem key={pic.id} id={pic.id} path={pic.path} description={pic.description} likes={pic.likes} setGallery={setGallery}/>
        ))}
    </>)
}

export default GalleryList