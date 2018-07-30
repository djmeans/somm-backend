const express = require('express');
const router = express.Router();
const queries = require('../queries/queries.js');

router.get(('/'), (req, res) => {
    queries.getAllVarietals().then(varietals => res.json({ varietals }))
})
router.get(('/:varietal'), (req, res) => {
    queries.getVarietalByVarietal(req.params.varietal).then(varietal => res.json({ varietal }))
})
router.post("/", (request, response, next) => {
    queries.create(request.body).then(varietal => {
        response.status(201).json({varietal: varietal});
    }).catch(next);
});

router.delete("/:varietal", (request, response, next) => {
    queries.deleteVarietal(request.params.varietal).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:varietal", (request, response, next) => {
    queries.update(request.params.varietal, request.body).then(varietal => {
        response.json({varietal: varietal[0]});
    }).catch(next);
});
module.exports = router;