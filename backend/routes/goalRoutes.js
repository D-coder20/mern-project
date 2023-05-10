const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const router = express.Router();

module.exports = router;

router.route("/").get(getGoals).post(setGoals);
router.route("/:id").put(updateGoal).delete(deleteGoal);
// router.get("/", getGoals);

// router.post("/", setGoals);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);
