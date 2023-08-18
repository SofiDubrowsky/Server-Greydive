require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const FormModel = require("./models/Form");
const UserModel = require("./models/User");
const ResponseModel = require("./models/Response")
const server = require('./app');


const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/greydive`,
   { logging: false, native: false }
);


FormModel(sequelize);
UserModel(sequelize);
ResponseModel(sequelize)

const { User, Form, Response } = sequelize.models;

User.hasMany(Response);
Response.belongsTo(User);

Form.hasMany(Response);
Response.belongsTo(Form);

module.exports = {
   User,
   Form,
   Response,
   conn: sequelize,
};




