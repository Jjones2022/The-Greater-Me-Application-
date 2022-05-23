const router = require("express").Router();
const userRoutes = require("./userRoutes");
const mentalRoutes = require("./mentalRoutes");
const physicalRoutes = require("./physicalRoutes");
const weeklyRoutes = require("./weeklyRoutes");

router.use("/users", userRoutes);
router.use("/mental", mentalRoutes);
router.use("/physical", physicalRoutes);
router.use("/weekly", weeklyRoutes);

module.exports = router;
