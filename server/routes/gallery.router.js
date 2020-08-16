const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE
   // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    let queryText = `
        UPDATE "gallery"
        SET "likes" = "likes" + 1
        WHERE "id" = $1
    `
    pool.query(queryText, [galleryId])
        .then(result => {
            res.sendStatus(200);
        })
        .catch(error => {
            console.log('Error with PUT route');
            res.sendStatus(500);
        });

}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    let queryText = `
        SELECT * FROM "gallery"
        ORDER BY "id" 
        `

    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error in get ROUTE', error);
            res.sendStatus(500);
        });
    // res.send(galleryItems);
}); // END GET Route

module.exports = router;