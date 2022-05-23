const router = require("express").Router();
const { User, Mental, Physical } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const physicalData = await Physical.findAll();
    const mentalData = await Mental.findAll();

    const physical = physicalData.map((data) => data.get({ plain: true }));
    const mental = mentalData.map((data) => data.get({ plain: true }));

    console.log(physical);
    res.render("home", {
      mental,
      physical,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

module.exports = router;
