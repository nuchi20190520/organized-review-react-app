const router = require('express').Router();
const reviewsController = require('../../controllers/reviewsController');

// /api/reviews
router.route('/')
    .get(reviewsController.findAll)
    .post(reviewsController.create);

// /api/reviews/:id
router.route('/:id')
    .get(reviewsController.findById)
    .put(reviewsController.updateById)
    .delete(reviewsController.deleteById);

module.exports = router;