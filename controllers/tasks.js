const getAllTasks = (req, res) => {
  res.send("These are all the tasks");
};

const createTask = (req, res) => {
  res.send("Task Created");
};

const getOneTask = (req, res) => {
  res.send("One Task");
};

const updateTask = (req, res) => {
  res.send("Task Updated");
};

const deleteTask = (req, res) => {
  res.send("Task Deleted");
};

module.exports = {
  getAllTasks,
  createTask,
  getOneTask,
  updateTask,
  deleteTask,
};
