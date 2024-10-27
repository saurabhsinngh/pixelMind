const { body, validationResult } = require('express-validator');

const registerValidation = [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Email is invalid'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('mobileNumber').notEmpty().withMessage('Mobile number is required').isLength({ min: 10 })
    .withMessage('Mobile number must be at least 10 digits').matches(/^\d+$/).withMessage('Mobile number must contain only digits')
];

const loginValidation = [
    body('email').isEmail().withMessage('Email is invalid, Please provide vailid email Id'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
]

const updateValidation = [
    body('name').optional().notEmpty().withMessage('Name cannot be empty'),
    body('email').optional().isEmail().withMessage('Email is invalid'),
    body('mobileNumber').notEmpty().withMessage('Mobile number is required').isLength({ min: 10 })
    .withMessage('Mobile number must be at least 10 digits').matches(/^\d+$/).withMessage('Mobile number must contain only digits')
]


const validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

module.exports = { registerValidation, updateValidation, loginValidation, validate };
