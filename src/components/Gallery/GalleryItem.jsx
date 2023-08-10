function showDescription() {
    console.log('in showDescription function')
    // Each gallery item will likely have a property containing this description
}

function likeImage() {
    console.log('in likeImage function')
    // Put route probably goes here
}

function GalleryItem() {

    return (<>
        <div className="image-container">
            <img width="100" height="100" onClick={showDescription} src="/images/goat_small.jpg"/>
            <button onClick={likeImage}>Like</button>
            <p>x people liked this</p>
        </div>
    </>)
}

export default GalleryItem