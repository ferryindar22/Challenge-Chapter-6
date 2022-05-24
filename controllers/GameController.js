const {user_game} = require("../models");
const {user_game_biodata} = require("../models");

// user_game

async function viewAll (req, res){
    try {
    let data = await user_game.findAll();
    // res.status(200).json({data});
    res.render("usergame", {data});
    } catch (error) {
    console.log(error);    
    }
    }

async function createData (req, res){
    try {  
    let {username, password}= req.body;
    let input = {username, password};
    let data = await user_game.create(input);
    // res.status(201).json(data);
    res.redirect('/usergame');
    } catch (error) {
    console.log(error);    
    }
    }

async function viewForm (req, res){
    try {  
    res.render("create");
    } catch (error) {
    console.log(error);    
    }
    }

async function viewFormEdit (req, res){
    try {  
    let {id} = req.params;
    let data = await user_game.findOne({ where: { id: id } });
    res.render("update", { data });
    } catch (error) {
    console.log(error);    
    }
    }
    
async function updateData (req, res){
    try {
    let {id} = req.params;
    let {username, password}= req.body;
    let input = {username, password};

    let data = await user_game.update(input, {where: {id:id}});
    // res.status(200).json(data);
    res.redirect("/usergame");
    } catch (error) {
    console.log(error);   
    }
    }
    
async function deleteData (req, res){
    try {
    let{id} = req.params;

    let data = await user_game.destroy({ where:{id:id}});
    // res.status(200).json(data);
    res.redirect('/usergame');
    } catch (error) {
    console.log(error);    
    }
    }


async function viewById(req, res) {
    try {
    let{id} = req.params;
    let data = await user_game.findOne({ where: { id: id } });
    // res.status(200).json(data);
    res.render("detail", { data });
    } catch (error) {
    console.log(error);    
    }
    } 




/// user_game_biodata
async function viewAllBiodata (req, res){
    try {
    let biodata = await user_game_biodata.findAll();
    // res.status(200).json(biodata);
    // res.render("detail", {biodata});
    } catch (error) {
    console.log(error);    
    }
    }

async function createBiodata (req, res){
    try {  
    let {name,age,city}= req.body;
    let input = {name,age,city};
    let biodata = await user_game_biodata.create(input);
    // res.status(201).json(biodata);
    // res.redirect('/usergame/biodata');
    } catch (error) {
    console.log(error);    
    }
    }

async function viewBiodataById(req, res) {
    try {
    let{id} = req.params;
    let biodata = await user_game_biodata.findOne({ where: { id: id } });
    // res.status(200).json(biodata);
    // res.render("detail", {biodata});
    } catch (error) {
    console.log(error);    
    }
    }    

module.exports = {
    viewAll, 
    createData, 
    updateData, 
    deleteData, 
    viewById,
    viewForm,
    viewFormEdit,
    viewAllBiodata,
    createBiodata,
    viewBiodataById
};