const express = require("express");
const mysql = require("mysql");

const nameGenerator = require("./helpers/nameGenerator");

const app = express();
const port = 3000;

const config = {
  host: "db",
  user: "descubra",
  password: "descubra",
  database: "nodedb",
  port: "3306",
};

const connection = mysql.createConnection(config);

connection.connect();

app.get("/", async (req, res) => {
  const name = nameGenerator();

  connection.query(`INSERT INTO people(name) values ('${name}')`);
  connection.query(`SELECT name FROM people`, (err, results, fields) => {
    res.send(`
    <h1>Full Cycle Rocks!</h1>
    <ol>
    ${
      !!results.length
        ? results.map((el) => `<li>${el.name}</li>`).join("")
        : ""
    }
    `);
  });
});

app.listen(port, () => {
  console.log("Rodando na porta:", port);
});
