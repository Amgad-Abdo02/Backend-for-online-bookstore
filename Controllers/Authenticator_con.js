require('dotenv').config()

const jwt = require("jsonwebtoken");
const {UsersService} = require("../service/UserServices");

class authcon{

    async login(req, res) {

        const {username, password} = req.body;
        let userService = new UsersService;
        let user = await userService.login(username, password)
        const accessToken=jwt.sign(username,process.env.ACCESS_TOKEN_SECRET)
        res.json({accessToken: accessToken,
                   user : user})
        
    }

    async register(req, res) {

        const {username, password} = req.body;
        let userService = new UsersService;
        let user = await userService.register(username, password)
        const accessToken=jwt.sign(username,process.env.ACCESS_TOKEN_SECRET)
        res.json({accessToken: accessToken,
                   user : user})
    }

    forgetPassword(req, res) {
        res.json({
            message: "forgetpassword"
        });
    }

    resetPassword(req, res) {
        res.json({
            message: "reset password"
        });
    }

    
}
module.exports = {
    authcon
}

