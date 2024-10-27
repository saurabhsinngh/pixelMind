const express = require('express');
const {
    registerUser,
    loginUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    auth,
} = require('../controllers/userController');
const { registerValidation, validate, updateValidation, loginValidation } = require('../utils/validation');

const router = express.Router();

router.post('/register', registerValidation, validate, registerUser);
router.post('/login', loginValidation, validate, loginUser);

//jwt auth
router.use(auth); 

router.get('/', getAllUsers); 
router.get('/:id', getUserById); 
router.put('/:id', updateValidation, validate, updateUser); 
router.delete('/:id', deleteUser); 

module.exports = router;
