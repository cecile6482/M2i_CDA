//Démarrer un serveur web en nodejs

const http = require("http");

const config = {
  host: "127.0.0.1",
  port: 8080,
};

const server = http.createServer((req, res) => {
  console.log(req.method);
  const { headers } = req;
  console.log(headers);
  res.end("hello world!");
});

// Objet avec les méthodes pour l'intéraction avec une base de données NoSQL Redis

const redis = require('redis');
const host = 'localhost';
const port = "6379";
const client = redis.createClient(port, host);

client
  .on("connect", () => {
    console.log("Connected to redis server");
  })
  .connect();

demoRedis(client);

server.listen(config, () => {
  console.log(`listening on: http://${config.host}:${config.port}`);
});

//Fonction pour ajouter dans redis
async function addToRedis(client, key, value) {
    try {
      await client.set(key, value);
    } catch (err) {
      console.error(err);
    }
  }
  
  //Fonction pour récupérer
  async function getFromRedis(client, key) {
    try {
      const result = await client.get(key);
      return result;
    } catch (err) {
      console.error(err);
    }
  }
  
  //Fonction pour supprimer
  async function deleteFromRedis(client, key) {
    try {
      await client.del(key);
    } catch (err) {
      console.error(err);
    }
  }
  
  async function demoRedis(client) {
    //Inserer des données dans redis string
    await client.set("key1", "value1");
  
    //Récupérer une valeur
    const valueKey1 = await client.get("key1");
    console.log(valueKey1);
  }
  

