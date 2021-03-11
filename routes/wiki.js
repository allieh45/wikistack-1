const { Router } = require("express");
const express = require("express");
const wikiRouter = express.Router();

wikiRouter.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

wikiRouter.post("/", (req, res, next) => {
  res.send("got to POST /wiki/");
});

wikiRouter.get("/add", (req, res, next) => {
  res.send("got to GET /wiki/add");
});

module.exports = wikiRouter;
