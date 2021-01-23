//create a router
const express = require('express')
const router = express.Router()
//add a get request to it
router.get('/api/notes', (req, res) => {
   
    // Should read the `db.json` file and return all saved notes as JSON 
})
//add a post request to it
router.post('/api/notes', (req, res) => {
   

})
//add a delete request to it
router.delete('/api/notes', (req, res) => {
   

})
//export the router
module.exports = router; 