const express = require("express");
const htmlroutes = require("./routes/htmlRoutes");
const apiroutes = require("./routes/apiRoutes");
const app = express();

const PORT = process.env.PORT  || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use("/api", apiroutes);
app.use("/", htmlroutes);

app.listen(PORT, () => {
  console.log(`App running at ${PORT}`);
});
