// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
// defino el modelo
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Pokemon = sequelize.define('Pokemon', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    life: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    defense: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
  });

  const User = require('./User')(sequelize); // Importa el modelo de usuario

  // Define la relación con el modelo User correctamente
  Pokemon.belongsToMany(User, { through: 'UserPokemon' });

  return Pokemon;
};
