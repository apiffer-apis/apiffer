const pm2 = require("pm2");
const {
  createGetApi,
  stopApi,
  pm2List,
  stopEndpoint,
} = require("../../handlers");

const createNewApi = async (req, res) => {
  const { path, body } = req.body;
  console.log(path, body);
  createGetApi(path, body)
    .then((data) => {
      res.send({ status: data, endpoint: path, });
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = createNewApi;
