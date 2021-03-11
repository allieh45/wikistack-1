const express = require("express");
const morgan = require("morgan");
const app = express();
const { db, Page, User } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/users");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use("/wiki", wikiRouter);
app.use("/users", userRouter);

app.get("/", (req, res, next) => {
  res.redirect("/wiki");
});

db.authenticate().then(() => {
  console.log("connected to the database");
});

const init = async () => {
  await db.sync({ force: true });
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
};

init();
