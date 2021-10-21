const User = require('../models/user');

const UserController = {
    getAllUsers(req, res) {
        User.findAll().then((users)=>res.json(users));
    },

    async getUserByID(req,res){
        let Id = req.body.id;
        console.log(req.body.id);
        console.log("id is "+ Id)
        let user = await User.findByPk(Id);
        if(user === null)res.status(404).send({
            message : 'User not found'
        });
        else res.json(user);
    },

    async createNewUser(req, res){
        res.send(await User.create(req.body));
    },

    async updateUser(req, res){
        let data = req.body;
       // data.src = req.file.filename;
        await User.update(data, {
            where : {
                id:req.body.id
            }
        });
        res.status(200).send("updated");
    },

    async deleteUser(req, res){
        await User.destroy({
            where : {
                name:req.body.name
            }
        });
        res.status(200).send("deleted");
    }
}


module.exports = UserController;