const express = require("express");
const {bookcon} = require("../Controllers/book_con");
const {AuthorCon} = require("../Controllers/Author_con")
const {featureCon} = require("../Controllers/feutured_con")
const {authcon} = require("../Controllers/Authenticator_con")
const websiteApp = express();


let bookcontroller = new bookcon();
let Authinticator =  new authcon()
let featurecontroller = new featureCon()
let AuthorController = new AuthorCon()

// saeed this is probably main page we ah ana katbo comment 3shank enta bs

websiteApp.get("/",)
//listAll
websiteApp.get("/product", bookcontroller.list);
//get one
websiteApp.get("/product/:id", bookcontroller.viewOne);
// -----------------
//list
websiteApp.get("/Authors", AuthorController.list);
// -----------------
// auth
websiteApp.post("/auth/login", Authinticator.login);
websiteApp.post("/auth/register",Authinticator.register);
websiteApp.post("/auth/forget-password", Authinticator.forgetPassword);
websiteApp.post("/auth/reset-password", Authinticator.resetPassword);

module.exports = {
    websiteApp
}