const express = require("express");
const config = require("./config/app");
const router = require("./routes");

const app = express();

app.use(router);

const port = config.appPort;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
