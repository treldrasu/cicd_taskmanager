let tasks = [];
let idCounter = 1;

// Aufgabe erstellen
// return task
function createTask(title) {
    const task = {
        id: idCounter++,
        title: title,
        done: false
    };
    tasks.push(task);
    return task;
}

// Alle Aufgaben abrufen
// return das task Array
function getTasks() {
    return tasks;
}

module.exports = {
    createTask,
    getTasks
};
