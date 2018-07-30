const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get(('/'), (req, res) => {
    queries.getAllRegions().then(regions => res.json({ regions }))
})

router.get(('/:id'),(req, res)=>{
    queries.getRegionById(req.params.id).then(region => res.json({ region }))
})

router.delete(('/:id'),(req, res, next) =>{
    queries.deleteRegion(req.params.id).then(() => {
        res.status(204).json({deleted: true});
    }).catch(next);
})
router.post("/", (request, response, next) => {
    queries.create(request.body).then(varietal => {
        response.status(201).json({varietal: varietal});
    }).catch(next);
});

module.exports = router;