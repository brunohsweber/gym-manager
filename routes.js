const express = require("express");
const routes = express.Router();
const instructors = require("./instructors");

routes.get("/", function (req, res) {
  return res.redirect("/instructors");
});

routes.get("/instructors", instructors.index);
routes.get("/instructors/create", instructors.create);
routes.get("/instructors/:id", instructors.show);
routes.get("/instructors/:id/edit", instructors.edit);
routes.post("/instructors", instructors.post);

routes.use(function (req, res) {
  res.status(404).render("not-found");
});

module.exports = routes;
