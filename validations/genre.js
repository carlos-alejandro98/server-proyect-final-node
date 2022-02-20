const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateCreateGenre = [
    check("name")
        .exists()
        .isString()
        .withMessage("Name should be text")
        .not()
        .isEmpty()
        .withMessage("Name is Required")
        .isLength({ max: 32 })
        .withMessage("Name must be contain maxium 32 characters")
        .isLength({ min: 2 })
        .withMessage("Name must be contain minimum 2 characters"),
    
    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateUpdateGenre = [
    param("slug")
        .isLowercase()
        .withMessage("Slug should be pas in lowercase")
        .exists()
        .withMessage("Slug should be text")
        .not()
        .isEmpty()
        .withMessage("Slug is Required"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
];


module.exports = { validateCreateGenre, validateUpdateGenre };