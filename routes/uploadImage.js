const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const upload = require('../middlewares/upload');

router.get('/getAllImages',imageController.getAllImages);
router.get('/getImageByID/:id',imageController.getImageByID);

router.post('/createNewImage',upload.single('img'),imageController.createNewImage);


router.put('/:id', upload.single('img'), imageController.updateImage);
router.delete('/:id', imageController.deleteImage);

module.exports = router;



//curl -F "descp=wallpaper" -F "likes=10" -F "downloads=15" -F "img=@/Users/sauravmaan/Downloads/testwall.jpeg" -X POST http://localhost:3000/api2/createNewImage

