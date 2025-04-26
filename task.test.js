// task.test.js
const { addTask } = require('./task');

test('debería agregar una tarea con título "Estudiar TDD"', () => {
  const task = addTask('Estudiar TDD');
  expect(task.title).toBe('Estudiar TDD');
});
