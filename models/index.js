const User = require("./User");
const Physical = require("./Physical");
const Mental = require("./Mental");
const Weekly = require("./WeeklyPlan");

Physical.belongsTo(User, {
  foreignKey: "userId",
});

Mental.belongsTo(User, {
  foreignKey: "userId",
});

Weekly.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = { User, Physical, Mental, Weekly };
