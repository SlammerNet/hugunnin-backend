import { DataTypes } from 'sequelize'
import sequelize from "../database/connecton"

//Backpacker model
const Theories = sequelize.define('Theories', {
    id : {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    author: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "Anonimous"
    },
    secretKey: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "SECRET KEY",
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
        defaultValue: "Author Description Here",

    }
},{
    paranoid: true
});

export default Theories;