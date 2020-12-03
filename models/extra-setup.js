function applyExtraSetup(sequelize) {
    const { user, group, message } = sequelize.models;

    user.belongsToMany(group, {
        through: 'member',
        foreignKey: 'userId',
    });

    message.belongsTo(group, {
        foreignKey: 'groupId',
    });
    message.belongsTo(user, {
        foreignKey: 'userId',
    });

    group.belongsToMany(user, {
        through: 'member',
        foreignKey: 'teamId',
    });
    group.belongsTo(user, {
        foreignKey: 'owner',
    });
}

module.exports = { applyExtraSetup };