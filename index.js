const readline = require('readline');
const { createTask, getTasks } = require('./src/Teilnehmer1');
const { markTaskAsDone } = require('./src/Teilnehmer2');
const { deleteTask } = require('./src/Teilnehmer3');

// Interface für die Konsoleneingabe erstellen
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Funktion, um das Hauptmenü anzuzeigen
function showMenu() {
    console.log("\nTask Manager");
    showTasks();
    console.log("======================================================");
    console.log("N: Neue Aufgabe erstellen | Z: Alle Aufgaben anzeigen | C: Beenden");
    console.log("Zum erledigen oder löschen (E {id}: Erledigt, L {id}: Löschen).");
    rl.question("> ", handleMenuSelection);
}

// Funktion, um Aufgaben anzuzeigen
function showTasks() {
    const tasks = getTasks();
    console.log("\nAktuelle Aufgaben:");
    tasks.forEach(task => {
        console.log(`[${task.id}] ${task.title} - ${task.done ? "Erledigt" : "Offen"}`);
    });
}

// Funktion zur Verarbeitung der Menüauswahl
function handleMenuSelection(choice) {
    if (choice.startsWith('E')) {
        const taskId = parseInt(choice.slice(1), 10);
        const task = markTaskAsDone(taskId);
        if (task) {
            console.log(`Aufgabe [${task.id}] wurde als erledigt markiert.`);
        } else {
            console.log(`Keine Aufgabe mit der ID ${taskId} gefunden.`);
        }
        showMenu();
    } else if (choice.startsWith('L')) {
        const taskId = parseInt(choice.slice(1), 10);
        const success = deleteTask(taskId);
        if (success) {
            console.log(`Aufgabe [${taskId}] wurde gelöscht.`);
        } else {
            console.log(`Keine Aufgabe mit der ID ${taskId} gefunden.`);
        }
        showMenu();
    } else {
        switch (choice.toLowerCase()) {
            case 'n':
                rl.question("Gib den Titel der Aufgabe ein: ", (title) => {
                    const task = createTask(title);
                    console.log(`Aufgabe erstellt: [${task.id}] ${task.title}`);
                    showMenu();
                });
                break;
            case 'z':
                showTasks();
                showMenu();
                break;
            case 'c':
                rl.close();
                break;
            default:
                console.log("Ungültige Auswahl, bitte versuche es erneut.");
                showMenu();
                break;
        }
    }
}

// Programm starten
showMenu();
