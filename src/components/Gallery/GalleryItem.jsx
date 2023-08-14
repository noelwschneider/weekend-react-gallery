import axios from 'axios'
import { useState } from 'react'

// Styling
import { Button } from '@mui/material'
import { ImageListItem } from '@mui/material'

function GalleryItem(pic) {

    const [descMode, setDescMode] = useState(false)
    function showDescription() {
        setDescMode(!descMode)
    }

    const [blueMode, setBlueMode] = useState(false)
    function makeBlue() {
        setBlueMode(true)
    }
    function makeUnblue() {
        setBlueMode(false)
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

              ? <ImageListItem 
                    key={pic.id} 
                    onClick={showDescription}>

                    <p className="description">
                        {pic.description}
                    </p>

                    <img 
                        className="descMode" 
                        width="400" 
                        height="200" 
                        src={pic.path}/>

                    <Button 
                        className="like-button"
                        variant="contained" 
                       >
                        Like ({pic.likes})
                    </Button>
                </ImageListItem>   

              : blueMode
                  ? <ImageListItem key={pic.id}>
                        <img width="400" height="200" onClick={showDescription} src={pic.path} className="blue-container"/>
                        <Button 
                            className="like-button" 
                            variant="contained" 
                            onClick={likeImage}
                            onMouseEnter={makeBlue}
                            onMouseLeave={makeUnblue}
                            >
                            Like ({pic.likes})
                        </Button>
                    </ImageListItem>

                  : <ImageListItem key={pic.id}>
                        <img width="400" height="200" onClick={showDescription} src={pic.path}/>
                        <Button 
                            className="like-button" 
                            variant="contained" 
                            onClick={likeImage}
                            onMouseEnter={makeBlue}
                            onMouseLeave={makeUnblue}
                            >
                            Like ({pic.likes})
                        </Button>
                    </ImageListItem>
            }
        </div>
    </>)
}

export default GalleryItem