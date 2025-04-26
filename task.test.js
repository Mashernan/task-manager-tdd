const fs = require('fs');
const path = require('path');
const { addTask } = require('./task');

const tasksFilePath = path.join(__dirname, 'tasks.json');

beforeEach(() => {
  if (fs.existsSync(tasksFilePath)) fs.unlinkSync(tasksFilePath);
});

test('debería agregar una tarea y guardarla en el archivo', () => {
  const task = addTask('Refactorizar prueba');
  expect(task.title).toBe('Refactorizar prueba');
  expect(typeof task.id).toBe('number');
  expect(task.completed).toBe(false);

  const savedTasks = JSON.parse(fs.readFileSync(tasksFilePath, 'utf-8'));
  expect(savedTasks.length).toBe(1);
  expect(savedTasks[0].title).toBe('Refactorizar prueba');
});
