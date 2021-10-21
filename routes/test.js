const express = require('express');
const router = express.Router();
const user = require("../controllers/test")


router.get('/', (req,res) => res.json('Express Node Server'));
router.get('/api', (req, res) => res.json('Express API'));
router.get('/users',user.getAllUsers);
router.post('/users',user.createNewUser);
router.get('/userById',user.getUserByID);
router.delete('/deleteUserById',user.deleteUser);
router.put('/updateUserById',user.updateUser);

module.exports = router;