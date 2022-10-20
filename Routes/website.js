const express = require("express");
const {bookcon} = require("../controllers/book_con");
const websiteApp = express();


let bookcontroller = new bookcon();
let Authinticator =  new authcon()
let featurecontroller = new featureCon()
let AuthorController = new AuthorCon()


websiteApp.get("/product",bookcontroller.list);
websiteApp.get("/",)

module.exports = {
    websiteApp
}