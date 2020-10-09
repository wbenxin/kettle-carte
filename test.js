const Carte = require("./index");

let client = new Carte("localhost", 80, "cluster", "cluster");

setImmediate(async () => {
  let d = await client.status();
  console.log(JSON.stringify(d));
})