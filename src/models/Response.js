const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Response', {
      id:{
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement:true },
      formData: {
            type: DataTypes.JSON, 
            allowNull: false,
        },
   }, { timestamps: false });
};



