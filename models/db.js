import { Sequelize, DataTypes } from "sequelize";

export default sequelize = new Sequelize('technest', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})