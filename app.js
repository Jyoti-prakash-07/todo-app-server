const express = require('express');
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');

var indexRouter = require('./route/index');
var usersRouter = require('./route/users');
var authRouter = require('./route/auth');
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/auth', authRouter);


const sequelize = new Sequelize('helloworld', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('MySQL connection established successfully.');
    } catch (error) {
        console.error('Unable to connect to database:', error);
    }
})();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});