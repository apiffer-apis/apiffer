const pm2 = require("pm2");
const {
  createGetApi,
  stopApi,
  pm2List,
  stopEndpoint,
} = require("../../handlers");

const closeEndpoint = async (req, res) => {
    stopApi().then((data) => {
      res.send(data);
    }
    ).catch((err) => {
      res.send(err);
    }
    )
  }

module.exports = closeEndpoint;