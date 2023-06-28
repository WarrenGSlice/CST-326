const express = require("express");
const router = express.Router();
const { Users } = require("../models");

// I created this file, not sure if this is what got it working Warren 6/28
router.post("/Register", async (req, res) => {
  const post = req.body;
  await Users.create(post);
  res.json(post);
});

module.exports = router;