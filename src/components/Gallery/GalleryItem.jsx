import axios from 'axios'

function GalleryItem(pic) {

    function showDescription() {
        console.log(pic.description)
        // Each gallery item will likely have a property containing this description
    }
    
    function likeImage() {
        console.log(pic)

        axios.put(`/gallery/like/${pic.id}`, pic)
        .then( response => {
            console.log('response:', response)
        })
        .catch( error => {
            console.log('error in put', error)
        })

        // It is working, I just need to render it
    }

    return (<>
        <div className="image-container">
            <img width="100" height="100" onClick={showDescription} src="/images/goat_small.jpg"/>
            <button onClick={likeImage}>Like</button>
            <p>{pic.likes} people liked this</p>
        </div>
    </>)
}

export default GalleryItem