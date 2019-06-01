const router = require('express').Router();
const reviewsController = require('../../controllers/reviewsController');

router.route('/')
    .get(reviewsController.findAll)
    .post(reviewsController.create);

router.route('/:id')
    .get(reviewsController.findById)
    .put(reviewsController.updateById)
    .delete(reviewsController.deleteById);

module.exports = router;