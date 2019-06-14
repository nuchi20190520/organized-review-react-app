const router = require("express").Router();
const reviewRoutes = require("./reviews");
const resourceRoutes = require('./resources');

// Book routes
router.use("/reviews", reviewRoutes);
router.use('/resources', resourceRoutes);

module.exports = router;