const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('projetop1_db', 'root', 'password', {
    host: 'projetop1-db', // Nome do serviço definido no docker-compose.yml
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => {
        console.log('Connected to the database');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
