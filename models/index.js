const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('./extra-setup');

const sequelize = new Sequelize('messenger', 'postgres', 'postgres', { dialect: 'postgres' });

// const models = {
//     User: User,
//     Group: Group,
//     Message: Message
// };

// Object.keys(models).forEach((modelName) => {
//     if ('associate' in models[modelName]) {
//       models[modelName].associate(models);
//     }
// });

// models.sequelize = sequelize;
// models.Sequelize = Sequelize;

// export default models;

const modelDefiners = [
	require('./user'),
	require('./group'),
	require('./message'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

applyExtraSetup(sequelize);

module.exports = sequelize;
