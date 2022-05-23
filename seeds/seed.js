const sequelize = require("../config/connection");
const { Mental, Physical } = require("../models");

const mentalHealth = require("./mental.json");
const physicalhealth = require("./physical.json");

const injectData = async () => {
  await sequelize.sync({ force: true });

  await Mental.bulkCreate(mentalHealth, { force: true });

  await Physical.bulkCreate(physicalhealth, { force: true });
};

injectData();
