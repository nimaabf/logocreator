const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const openai = require("./controllers/openai");

const app = express();

// app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(openai.useData())
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

module.exports = app;
