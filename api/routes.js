const express = require('express');
const path = require('path');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
});

router.get('/assets/trophy', (req, res) => {
    const imagePath = path.join(__dirname, '../assets/bleulegs_trophy.jpg');
    res.sendFile(imagePath);
});

module.exports = router;
