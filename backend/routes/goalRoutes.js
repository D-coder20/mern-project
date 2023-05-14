const express = require("express");
const {
  getGoals,
  setGoals,
  updateGoal,
  deleteGoal,
} = require("../controllers/goalController");

const router = express.Router();

module.exports = router;

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getGoals).post(protect, setGoals);
router.route("/:id").put(protect, updateGoal).delete(protect, deleteGoal);
// router.get("/", getGoals);

// router.post("/", setGoals);

// router.put("/:id", updateGoal);

// router.delete("/:id", deleteGoal);
