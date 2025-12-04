const mysql = require('mysql');

const database = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
});

database.connect((err) => {
    if(err){
        console.log(`Erreur lors de la connexion à la BDD : ${err}`);
    } else {
        console.log(`Connexion réussie avec la bdd.`);
    }
});