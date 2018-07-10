const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get(('/'), (req, res) => {
    queries.getAllRegions().then(regions => res.json({ regions }))
})

module.exports = router;