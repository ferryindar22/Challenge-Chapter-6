const express = require("express");
const {gameController} = require ("../controllers");
const gameRouter = express.Router();

gameRouter.get("/", gameController.viewAll);
gameRouter.get("/create", gameController.viewForm);
gameRouter.get("/edit/:id", gameController.viewFormEdit);
gameRouter.post("/", gameController.createData);
gameRouter.post("/edit/:id", gameController.updateData);
gameRouter.get("/delete/:id", gameController.deleteData);
gameRouter.get("/detail/:id", gameController.viewById);
gameRouter.get("/biodata", gameController.viewAllBiodata);
gameRouter.post("/biodata", gameController.createBiodata);

module.exports = gameRouter;