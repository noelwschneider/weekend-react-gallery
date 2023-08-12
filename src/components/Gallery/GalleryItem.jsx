import axios from 'axios'
import { useState } from 'react'

// Styling
import { Button } from '@mui/material'
import {ImageListItem} from '@mui/material'

function GalleryItem(pic) {

    // NOTE TO SELF: REVIEW WHY THIS WORKS
        // IT DONT MAKE NO SENSE TO ME
            // THE CONCEPTS ARE SO LARGE AND I AM SO SMALL
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

              ? <ImageListItem key={pic.id} onClick={showDescription}>
                    <p className="description">{pic.description}</p>
                    <img className="descMode" width="400" height="200"  src={pic.path}/>
                    <Button 
                        variant="contained" 
                        disabled
                        >
                        Like ({pic.likes})
                    </Button>
                </ImageListItem>   

              : blueMode
                  ? <ImageListItem 
                        key={pic.id} 
                        className="blue-container"
                        >
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