const Mongo = require("mongodb")
const mongoclient = Mongo.MongoClient

 mongoclient.connect("mongodb://localhost:27017/test", function(err,db){
    if(err){
        console.log(err)

        return;
    }
    console.log("connection estaplished");
    const dbo = db.db("ecommerce") 
    dbo.createCollection("")
    db.close()
 
 })
