require("dotenv").config();
const express = require("express");
const homeRouter = require("./routes/homeRouter");
const app = express();

app.use("/", homeRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`);
})