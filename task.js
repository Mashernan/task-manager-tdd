const fs = require('fs');
const path = require('path');
const tasksFilePath = path.join(__dirname, 'tasks.json');

function loadTasks() {
  try {
    return JSON.parse(fs.readFileSync(tasksFilePath, 'utf-8'));
  } catch {
    return [];
  }
}

function saveTasks(tasks) {
  fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2));
}

function addTask(title) {
  const tasks = loadTasks();
  const newTask = {
    id: Date.now(),
    title,
    completed: false
  };
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

module.exports = { addTask };
