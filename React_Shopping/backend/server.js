import data from "./data";

const express = require(express);
const app = express();

app.get("/api/product", (req, res) => {
  res.send(data.product);
});

app.listen(3000, () => {
  console.log("server started localserver");
});
