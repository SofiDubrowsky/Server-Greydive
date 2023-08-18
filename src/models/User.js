const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
     id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true }, 
     email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true },
     name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
     password:{
      type: DataTypes.STRING,
      allowNull: false
     }
   }, { timestamps: false });
};
