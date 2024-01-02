import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../models/db.js";

const Comentarios = sequelize.define("comentarios", {
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
    comentario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

export default Comentarios