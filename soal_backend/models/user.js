'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require("../helpers/bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Epresence, {
        foreignKey: "id_users"
      })
    }
  }
  User.init({
    nama: DataTypes.STRING,
    email: DataTypes.STRING,
    npp: DataTypes.STRING,
    npp_supervisor: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook("beforeCreate", (user, options) => {
    user.password = hashPassword(user.password);
  });


  return User;
};