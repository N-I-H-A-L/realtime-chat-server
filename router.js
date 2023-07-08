const express = require('express');
const router = express.Router();

//If a get request is sent to '/' (localhost:5000/) then 'res' will be sent as response.
router.get('/', (req, res)=>{
    res.send('server is up and running');
});

module.exports = router;