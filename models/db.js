import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize('technest', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

export default sequelize