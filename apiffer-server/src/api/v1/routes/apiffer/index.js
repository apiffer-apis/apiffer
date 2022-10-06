const router = require("express").Router();

const {
   ListAllApis,closeEndpoint,stopApiEndpoint,createNewApi
  } = require("../../controllers");
  
  
router.post("/create" , createNewApi);
router.get("/list" , ListAllApis);
router.get("/stop" , stopApiEndpoint);
router.get("/close" , closeEndpoint);


module.exports = router;
