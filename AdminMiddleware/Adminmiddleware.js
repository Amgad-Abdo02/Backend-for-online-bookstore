const {UsersService} = require("../service/UserServices");
var jwt = require('jsonwebtoken');


async function AdminMiddleware(req, res, next) {

    if (req.path == "/auth/register" || req.path == "/auth/login")
        return next();
        

         let authheader = req.headers["authorization"]
         const token = authheader && authheader.split(' ')[1]
         if(token ==null) return res.sendStatus(401)

         jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err) return res.sendStatus(403)
            req.user = user
            next()
         })
        // let deco = jwt.verify(token, 'shhhhh')
        
        // let us = new UsersService
        // let user = await us.findById(deco.id);
    
        // if (!user)
        //     return res.status(401).json({message: "unauthorized"})
        // req.user = user;
        // next();
}

module.exports = {
    AdminMiddleware}