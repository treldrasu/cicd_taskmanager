const { getTasks } = require('./Teilnehmer1');

// Aufgabe löschen 
// return true or false (Aufgabe gelöscht oder nicht)
function deleteTask(id) {
    let tasks = getTasks();
    const index = tasks.findIndex(t => t.id === id);
    if (index !== -1) {
        tasks.splice(index, 1);
        return true;
    }
    return false;
}

module.exports = {
    deleteTask
};