const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	 sequelize.define('user', {
		username: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
			validate: {
				is: /^\w{3,}$/
			}
        },
        email: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
        },
        password: {
			allowNull: false,
			type: DataTypes.STRING,
			validate: {
				is: /^\w{8,}$/
			}
		},
	});
};
