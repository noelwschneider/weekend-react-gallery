const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool')


// GET Route
router.get('/', (req, res) => {
    const queryText = `
        SELECT * FROM "tweets"
        ORDER BY "likes" DESC, "id" ASC
        `
    
    pool.query(queryText)
    .then( result => {
        // console.log(result.rows)
        res.send(result.rows)
    })
    .catch( error => {
        console.log('error in serve GET', error)
        res.sendStatus(500)
    })
})

// PUT Route
router.put('/like/:id', (req, res) => {
    // console.log('req.params', req.params);

    const queryValues = req.params.id
    const queryText = `
        UPDATE "tweets" 
        SET "likes" = "likes" + 1
        WHERE "id" = $1
    `
    
   pool.query(queryText, [queryValues])
   .then( response => {
        // console.log(response)
        res.sendStatus(200)
   })
   .catch( error => {
    console.log('error in server PUT', error)
    res.sendStatus(500)
   }) 
}); 

module.exports = router;