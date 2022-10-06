const pm2 = require("pm2");

const pm2Start = (path,name, nodemon = false) => {
  pm2.connect(nodemon,function (err) {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    pm2.start(
      {
        script: path,
        name: name,
        max_memory_restart: '150M',
        force: true,
      },
      function (err, apps) {
        if (err) {
          console.error(err);
          return pm2.disconnect();
        }
      }
    );
  });
};


const pm2Stop = (name) => {
    pm2.stop(name, function (err, apps) {
      if (err) {
        console.error(err);
        return pm2.disconnect();
      }
      pm2.delete(name, (err) =>{
        console.log(err)
      })
    }
  );
}

const pm2Restart = (name) => {
  pm2.restart(name, function (err, apps) {
    if (err) {
      console.error(err);
      return pm2.disconnect();
    }
  }
  );
}


module.exports = {
  pm2Start: pm2Start,
  pm2Stop: pm2Stop,
  pm2Restart: pm2Restart
};
