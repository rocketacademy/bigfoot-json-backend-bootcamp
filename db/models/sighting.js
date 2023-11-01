const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Sighting extends Model {
    // create our associations

    static association(models) {
      // create associations in here
    }
  }

  // Similar structure to the migration, except the primary key and created_at/updated_at
  Sighting.init(
    {
      // date: DataTypes.DATE,
      // location: DataTypes.STRING,
      // notes: DataTypes.TEXT,
      date: {
        type: DataTypes.DATE,
      },
      location: {
        type: DataTypes.STRING,
      },
      notes: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      // this should be the FILE NAME! so it's sighting with small s
      modelName: "sighting",
      timestamps: true,
      underscored: true,
    }
  );

  return Sighting;
};
