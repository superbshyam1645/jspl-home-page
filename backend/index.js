require("dotenv").config();
const express = require("express");
const homeRouter = require("./routes/homeRouter");
const aboutRouter = require("./routes/aboutRouter");
const app = express();

app.use("/", homeRouter);
app.use("/group", aboutRouter);

app.listen(process.env.PORT, () => {
  console.log(`Listening on PORT ${process.env.PORT}`);
});
