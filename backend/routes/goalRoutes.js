const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "List of goals" });
});

router.post("/", (req, res) => {
  res.status(200).json({ message: "Created goal" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Changed goal with id: ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res
    .status(200)
    .json({ message: `Goal with id: ${req.params.id} was deleted` });
});

module.exports = router;
