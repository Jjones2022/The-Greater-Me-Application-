const router = require("express").Router();
const { Weekly } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const weeklyPlan = await Weekly.create({
      ...req.body,
      userId: req.session.userId,
    });

    res.json(weeklyPlan);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updatedPlan = await Weekly.update(req.body, {
      where: { id: req.params.id },
    });

    res.json(updatedPlan);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
