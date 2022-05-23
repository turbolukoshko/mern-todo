// @desc Get goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: "List of goals" });
}

// @desc Create goal
// @route POST /api/goals
// @access Private
const createGoal = (req, res) => {
    res.status(200).json({ message: "Created goal" });
}

// @desc Edit goal
// @route PUT /api/goals/:id
// @access Private
const editGoal = (req, res) => {
    res.status(200).json({ message: `Changed goal with id: ${req.params.id}` });
}

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
    res
        .status(200)
        .json({ message: `Goal with id: ${req.params.id} was deleted` });
}

module.exports = {
    getGoals,
    createGoal,
    editGoal,
    deleteGoal
}
