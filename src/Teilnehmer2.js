const { getTasks } = require('./Teilnehmer1');

// Aufgabe als erledigt markieren
//return die taks
function markTaskAsDone(id) {
    const tasks = getTasks();
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.done = true;
    }
    return task;
}

module.exports = {
    markTaskAsDone
};
