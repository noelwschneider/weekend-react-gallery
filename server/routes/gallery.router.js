const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    // console.log('req.params', req.params);
    const galleryId = req.params.id;
    for(const galleryItem of galleryItems) {
        if(galleryItem.id == galleryId) {
            galleryItem.likes += 1;
        }
    }
    //res.sendStatus(200);
    res.sendStatus(200)
}); // END PUT Route

/* THIS IS A WORKING ROUTE USING THE CLIENT GALLERY DATA
// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route
*/ 

// THIS IS AN ATTEMPT TO INSTEAD USE A DATABASE
// GET Route
router.get('/', (req, res) => {
    
    const queryText = `
        SELECT * FROM "tweets"
        ORDER BY "likes" DESC, "id" ASC
        `
    
    pool.query(queryText)
    .then( result => {
        console.log(result.rows)
        res.send(result.rows)
    })
    .catch( error => {
        console.log('error in serve GET', error)
        res.sendStatus(500)
    })
})

module.exports = router;