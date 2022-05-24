const { urlencoded } = require('express');
const express = require('express');
const app = express();
const port = 3000;
const router = require ('./routers')

app.set("view engine", "ejs")

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/", router);

app.listen(port, () => console.log(`running at port ${port}`));