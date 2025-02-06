const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
    res.json({value: "Hello world"})
});

module.exports = router;