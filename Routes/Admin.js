const express = require("express");
const {bookcon} = require("../Controllers/book_con")
const {AuthorCon} = require("../Controllers/Author_con")
const {authcon} = require("../Controllers/Authenticator_con")
const {AdminMiddleware} = require("../AdminMiddleware/Adminmiddleware")


const adminApp = express();

adminApp.use(AdminMiddleware)

   let bookcontroller = new bookcon()
   let Authinticator =  new authcon()
   let AuthorController = new AuthorCon()

//list
adminApp.get("/product", bookcontroller.list);
//create
adminApp.post("/product", bookcontroller.create);
//update
adminApp.put("/product/:id", bookcontroller.update);
adminApp.get("/product/:id", bookcontroller.viewOne);
//delete
adminApp.delete("/product/:id", bookcontroller.delete);
//change status
adminApp.put("/product/:id/:status", bookcontroller.changeStatus);

// -----------------
//list
adminApp.get("/Authors", AuthorController.list);
//create
adminApp.post("/Authors", AuthorController.create);
//update
adminApp.put("/Authors/:id", AuthorController.update);
//delete
adminApp.delete("/Authors/:id", AuthorController.delete);
// -----------------
// auth
adminApp.post("/auth/login", Authinticator.login);
adminApp.post("/auth/register",Authinticator.register);
adminApp.post("/auth/forget-password", Authinticator.forgetPassword);
adminApp.post("/auth/reset-password", Authinticator.resetPassword);


module.exports = {
    adminApp
}