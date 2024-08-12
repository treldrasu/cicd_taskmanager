const { createTask, getTasks } = require('../src/Teilnehmer1');
const { markTaskAsDone } = require('../src/Teilnehmer2');
const { deleteTask } = require('../src/Teilnehmer3');

test('create a new task', () => {
    const task = createTask('Learn CI/CD');
    expect(task.title).toBe('Learn CI/CD');
    expect(task.done).toBe(false);
});

test('get all tasks', () => {
    const tasks = getTasks();
    expect(tasks.length).toBeGreaterThan(0);
});

test('mark task as done', () => {
    const task = createTask('Test Task');
    const updatedTask = markTaskAsDone(task.id);
    expect(updatedTask.done).toBe(true);
});

test('delete a task', () => {
    const task = createTask('Delete Task');
    deleteTask(task.id);
    const tasks = getTasks();
    expect(tasks.find(t => t.id === task.id)).toBeUndefined();
});
