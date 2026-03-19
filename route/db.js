// const sequelize = new Sequelize('userdb', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
// });

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('MySQL connection established successfully.');
//     sequelize.sync()
//     } catch (error) {
//         console.error('Unable to connect to database:', error);
//     }
// })();


const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task_manager', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;
