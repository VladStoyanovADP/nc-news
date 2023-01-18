const endpointsInfo = require("../endpoints");

const getAllEndpoints = (req, res) => {
  res.status(200).send({ endpointsInfo });
};

module.exports = { getAllEndpoints }
