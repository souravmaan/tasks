const path =require('path');
const multer = require('multer');
//diskStorage to specify where are we gonna store the images
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,'images/')
    },
    //null is for error when uploading files and Images is the destination for the file
    //file in the middle is the variable which conatins the file 
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) //Appending extension file name will become date + original name
    }
});

const upload = multer({ storage: storage });
module.exports = upload;