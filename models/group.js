const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('group', {
		groupname: {
			allowNull: false,
			type: DataTypes.STRING,
        }
	});
};
