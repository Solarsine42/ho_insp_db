const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 8000;
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/members", require("./routes/membersRoute"));
app.use("/inspections", require("./routes/inspectionsRoute"));

app.listen(port, function() {
  console.log("listening on port: ", port);
});
