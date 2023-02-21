const dbConfig = require('../config/db.config');
const SequeLize = require('sequelize');

const sequeLize = new SequeLize(dbConfig.DATABASE,dbConfig.USER,dbConfig.PASSWORD,{
    host:dbConfig.HOST,
    dialect:dbConfig.DIALECT
}) 

const db = {};
db.sequeLize = sequeLize;
db.models = {};
db.models.User = require("./user")(sequeLize,SequeLize.DataTypes);
db.models.Chat = require("./chat")(sequeLize,SequeLize.DataTypes)
module.exports = db;