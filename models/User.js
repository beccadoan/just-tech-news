const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

// create User model
class User extends Model {}

// define table columns and configuration
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: falseß
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        sequelize,
        // Table configuration options go here
        // don't automaticall create timestamp fields
        timestamps: false,
        // don't pluralize name of database table
        freezeTableName: true,
        // use underscores instead of camel-casing
        underscored: true,
        // make it so our model name stays lowercase
        modelName: 'user'
    }
)

module.exports = User;