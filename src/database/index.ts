const Sequelize = require('sequelize');
const dbConfig  = require('../config/database');

const User = require('../models/User');
const FinalDriver = require('../models/FinalDriver');
const Card = require('../models/Card');
const ConductorDriver = require('../models/ConductorDriver');

const connection = new Sequelize(dbConfig);

User.init(connection);
FinalDriver.init(connection);
Card.init(connection);
ConductorDriver.init(connection);


FinalDriver.associate(connection.models);
Card.associate(connection.models);
ConductorDriver.associate(connection.models);


module.exports = connection;