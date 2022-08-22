const pm2 = require("pm2");
const {
  createGetApi,
  stopApi,
  pm2List,
  stopEndpoint,
} = require("../../handlers");

const ListAllApis = async (req, res) => {
    pm2.list((err, apps) => {
      if (err) {
        console.error(err);
        return pm2.disconnect();
      }
      res.send(apps);
    }
    );
  }

module.exports = ListAllApis;