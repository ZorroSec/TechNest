import { DataTypes, Sequelize } from "sequelize"
import sequelize from "../models/db.js"

const Posts = sequelize.define('posts', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data:{
        type: DataTypes.DATE,
        allowNull: false
    },
    post: {
        type: DataTypes.STRING,
        allowNull: false
    }
})