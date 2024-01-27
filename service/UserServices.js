const {User} = require("../DB/User");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

class UsersService {

    async login(email, password){
        let userModel = new User;
    let userlist = await userModel.find({email: email});


    // check if user found
    if (userlist.length == 0)
        return {status: false, message: "user not found"};

    let user = userlist[0]
    // check password matched (encryption)
    if (!(await this.passwordIsMatched(user.password, password.toString())))
        return {status: false, message: "password is wrong"};
    

/// user is ok


    let token = jwt.sign({email: user.email, id: user._id}, 'shhhhh');

    return {status: true, token,role: user.role};

    }

    async findById(authid) {
        let userModel = new User;
        return userModel.findOne(authid);
    }

    async register(email, password) {
        let userModel = new User;

        let canCount = await this.checkemail(email)
        if (!canCount)
            return {status: false, message:"email Already exists"};


        password = await this.encrypt(password.toString());


        return userModel.insertOne({
            email, password, isActive: true,role: "User"
        });
    }

    async checkemail(email) {
        let userModel = new User;
        let userList = await userModel.find({email});
        return userList.length > 0 ? false : true;
    }

    encrypt(password) {
        return new Promise((resolve, reject) => {
            bcrypt.hash(password, 10, (err, hash) => {
                if (err) return reject(err);
                resolve(hash);
            })
        });
    }

    async passwordIsMatched(hashed, password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hashed, (err, result) => {
                if (err) return reject(err);
                resolve(result);
            })
        })
    }
}


module.exports = {
    UsersService
}