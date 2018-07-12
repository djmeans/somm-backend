const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get(('/'), (req, res) => {
    queries.getAllRegions().then(regions => res.json({ regions }))
})

router.get(('/:id'),(req, res)=>{
    queries.getRegionById(req.params.id).then(region => res.json({ region }))
})

router.delete(('/:id'),(req, res) =>{
    queries.delete(req.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
})

module.exports = router;