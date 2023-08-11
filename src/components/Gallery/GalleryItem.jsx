import axios from 'axios'

function GalleryItem(pic) {

    function showDescription() {
        console.log(pic.description)
        // Each gallery item will likely have a property containing this description
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
            <img width="400" height="200" onClick={showDescription} src={pic.path}/>
            <button onClick={likeImage}>Like</button>
            <p>{pic.likes} people liked this</p>
        </div>
    </>)
}

export default GalleryItem