const Image = require('../models/image');

const imageController = {
    getAllImages(req, res) {
        Image.findAll().then((frames)=>res.json(frames));
    },

    async getImageByID(req,res){
        let id = req.params.id;
        console.log(req.body);
        let image = await Image.findByPk(id);
        if(image === null)res.status(404).send({
            message : 'image not found'
        });
        else res.json(image);
    },

    async createNewImage(req, res){

        console.log(req);
        res.send(await Image.create({src:req.file.filename, ...req.body}));
    },

    async updateImage(req, res){
        let data = req.body;
        data.src = req.file.filename;

        await Image.update(data, {
            where : {
                id:req.params.id
            }
        });
        res.status(200).send("updated");
    },

    async deleteImage(req, res){
        await Frame.destroy({
            where : {
                id:req.params.id
            }
        });
        res.status(200).send("deleted");
    }
}


module.exports = imageController;