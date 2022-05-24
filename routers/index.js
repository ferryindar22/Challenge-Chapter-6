const express = require('express');
const gameRouter = require ("./gameRouter");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("index");
});

router.use("/usergame", gameRouter)

module.exports = router;