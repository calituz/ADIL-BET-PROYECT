const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Review = sequelize.define(
    "review",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.ENUM("Pending", "Aprobed"),
        defaultValue: "Pending",
      },
      reviewData: {
        type: DataTypes.STRING,
      },
      userId: {
        type: DataTypes.INTEGER,
        // references: {
        //   model: 'users',
        //   key: 'id',
        // },
        // onUpdate: 'cascade',
        // onDelete: 'cascade',
      },
    },
    { timestamps: false }
  );

  // Review.associate = (models) => {
  //   Review.belongsTo(models.User, {
  //     foreignKey: 'userId',
  //   });
  // };
  // return Review;
};
