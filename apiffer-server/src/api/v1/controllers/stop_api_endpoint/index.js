const pm2 = require("pm2");
const {
  createGetApi,
  stopApi,
  pm2List,
  stopEndpoint,
} = require("../../handlers");

const stopApiEndpoint = async (req, res) => {
    const { endpoint } = req.query;
    stopEndpoint(endpoint).then((data) => {
      res.send(data);
    }
    ).catch((err) => {
      res.send(err);
    }
    )
  }
module.exports = stopApiEndpoint;