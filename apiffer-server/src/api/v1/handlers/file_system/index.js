const fs = require("fs");
const util = require("util");
const { v4: uuidv4 } = require("uuid");
const unlinkFile = util.promisify(fs.unlink);
const { pm2Start, pm2Stop, pm2Restart } = require("../pm2_service");

var port = 1240;
// var portSocket = 2000;

const createGetApi = async (path, body) => {
  if (fs.existsSync("src/nodes/kallshreyanam.js")) {
    return updateApi(path, body);
  } else {
    return createApi(path, body);
  }
};

const createApi = async (path, body) => {
  // var uuid = uuidv4()
  var uuid = "kallshreyanam";
  var fileName = uuid + ".js";
  var filePath = `src/nodes/${fileName}`;
  var data = fs.readFileSync(`src/template/entrypoint.js`);
  if (!fs.existsSync("src/nodes")) {
    fs.mkdirSync("src/nodes", { recursive: true });
  }
  var file = await fs.createWriteStream(filePath);
  data = data.toString().replace(/PORT/g, port);
  data = data.toString().replace(/DATA/g, body);
  data = data.toString().replace(/PATH/g, path);
  file.write(data);
  file.close();
  pm2Start(filePath, fileName);
  return "ok";
};

const updateApi = async (path, body) => {
  var fileName = "kallshreyanam.js";
  var filePath = `src/nodes/${fileName}`;
  var filePath = `src/nodes/${fileName}`;
  var mainFile = fs.readFileSync(filePath);
  let dataArray = mainFile.toString().split("\n");
  let lastIndex = -1;
  for (let index = 0; index < dataArray.length; index++) {
    if (dataArray[index].includes(path)) {
      lastIndex = index;
      break;
    }
  }
  if (lastIndex == -1) {
    var getData = fs.readFileSync(`src/template/get.js`);
    getData = getData.toString().replace(/DATA/g, body);
    getData = getData.toString().replace(/PATH/g, path);
    var file = await fs.appendFileSync(filePath, getData, "utf8");
    pm2Start(filePath, fileName);
    return "ok";
  } else {
    return "error : endpoint already exists";
  }
};

const stopEndpoint = async (endpoint) => {
  console.log(endpoint);
  var fileName = "kallshreyanam.js";
  var filePath = `src/nodes/${fileName}`;
  var getData = fs.readFileSync(filePath);
  let dataArray = getData.toString().split("\n");
  let lastIndex = -1;
  for (let index = 0; index < dataArray.length; index++) {
    if (dataArray[index].includes(endpoint)) {
      lastIndex = index;
      break;
    }
  }
  console.log(lastIndex);
  dataArray.splice(lastIndex, 1);
  const updatedData = dataArray.join("\n");
  fs.writeFile(filePath, updatedData, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
  pm2Restart("kallshreyanam.js");

  return "ok";
};

const stopApi = async () => {
  pm2Stop("kallshreyanam.js");
  await unlinkFile(`src/nodes/kallshreyanam.js`);
  return "ok";
};

const listRunningEndpoints = async () => {
  var fileName = "kallshreyanam.js";
  var filePath = `src/nodes/${fileName}`;
  var getData = fs.readFileSync(filePath);
  let dataArray = getData.toString().split("\n");
  let lastIndex = [];
  for (let index = 0; index < dataArray.length; index++) {
    if (dataArray[index].includes("/")) {
      lastIndex.push(dataArray[index].replace(/app.get()/g, "").split(",")[0]);
      console.log(dataArray[index]);
    }
  }
  if (lastIndex.length == 0) {
    return "no endpoints";
  } else {
    return lastIndex;
  }
};

module.exports = {
  listRunningEndpoints: listRunningEndpoints,
  createGetApi: createGetApi,
  stopApi: stopApi,
  stopEndpoint: stopEndpoint,
};
