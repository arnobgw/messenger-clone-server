const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('message', {
		messageText: {
			allowNull: false,
			type: DataTypes.STRING,
        }
	});
};
