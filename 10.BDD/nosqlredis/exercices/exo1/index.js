//Création d'un objet pour communiquer avec Redis
const redis = require("redis");
const host = "127.0.0.1";
const port = "6379";
const client = redis.createClient(port, host);
client.on("connect", () => {}).connect();

//Création d'un objet pour intéragir avec la console
const readline = require("readline");
const { stdin: input, stdout: output } = require("process");

const rl = readline.createInterface({ input, output });

//Mettre l'index à 0
// setTaskIndex(0);

//Démarre1
menu();

//Fonctions
//Question en async
function questionAsync(question) {
  return new Promise((resolve, reject) => {
    rl.question(question, (response) => {
      resolve(response);
    });
  });
}

// Menu
async function menu() {
  console.log("==== Gestion de tâches ====");
  let choix = "";
  do {
    console.log(
      "1 -- Ajouter une tâche \n2 -- Afficher les tâches\n3 -- Supprimer une tâche\n"
    );
    choix = await questionAsync("Votre choix : ");
    switch (choix) {
      case "1":
        await addTask();
        break;
        case "2":
        await showTasks(); 
        break;
        case "3":
        await deleteTask(); 
        break;
    }
  } while (choix != "0");
}

//Récupérer index
async function getTaskIndex() {
  const count = await client.get("taskIndex");
  return parseInt(count);
}

//Set Index
async function setTaskIndex(index) {
  await client.set("taskIndex", index);
}

//Ajouter une tâche
async function addTask() {
  const task = await questionAsync("Merci de saisir la tâche : ");
  const oldIndex = await getTaskIndex();
  const result = await client.set(`task${oldIndex + 1}`, task);
  console.log(oldIndex)
  await setTaskIndex(oldIndex + 1);
  console.log("Task ajoutée " + result);
}

//Afficher les tâches
async function showTasks() {
    const taskIndex = await getTaskIndex();
    if (taskIndex === 0) {
      console.log("Aucune tâche enregistrée.");
      return;
    }
  
    console.log("==== Liste des tâches ====");
    for (let i = 1; i <= taskIndex; i++) {
      const task = await client.get(`task${i}`);
      console.log(`${i}. ${task}`);
    }
  }

//Supprimer une tâche
async function deleteTask() {
  const taskIndex = await getTaskIndex();
  if (taskIndex === 0) {
    console.log("Aucune tâche enregistrée.");
    return;
  }

  const taskToDelete = await questionAsync(
    "Quelle tâche souhaitez-vous supprimer ? "
  );
  await client.del(`task${taskToDelete}`);
  console.log("Tâche supprimée.");

  // Met à jour les numéros des tâches restantes dans Redis après suppression
  for (let i = parseInt(taskToDelete); i < taskIndex; i++) {
    const nextTask = await client.get(`task${i + 1}`);
    await client.set(`task${i}`, nextTask);
  }

  // Met à jour l'index des tâches dans Redis
  await setTaskIndex(taskIndex - 1);
} 



