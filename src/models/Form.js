const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Form', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement:true },
      title: {
         type: DataTypes.STRING,
         allowNull: false,},
      structure: {
         type: DataTypes.JSON, 
         allowNull: false,
      },
   }, { timestamps: false });
};
