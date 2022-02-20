const { check, param } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateCreateGame = [
    check("title")
        .exists()
        .isString()
        .withMessage("Title should be text")
        .not()
        .isEmpty()
        .withMessage("Title is Required")
        .isLength({ max: 32 })
        .withMessage("Game must be contain maxium 32 characters"),
    check("description")
        .exists()
        .isString()
        .withMessage("Description should be text")
        .not()
        .isEmpty()
        .withMessage("Description is Required")
        .isLength({ max: 2000 })
        .withMessage("Description must be contain maxium 2000 characters"),
    check("genre")
        .exists()
        .withMessage("Description should be text")
        .not()
        .isEmpty()
        .withMessage("Genre is Required"),
    check("url")
        .exists()
        .isString()
        .withMessage("URL should be text"),
    check("platform")
        .exists()
        .withMessage("Platform should be text")
        .not()
        .isEmpty()
        .withMessage("Platform is Required"),
    check("mainImage")
        .exists()
        .withMessage("MainImage should be text")
        .not()
        .isEmpty()
        .withMessage("MainImage is Required"),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateUpdateGame = [
    // body: title, description
    // param: slug
    param("slug")
        .isLowercase()
        .withMessage("Slug should be pas in lowercase"),
    check("title")
        .exists()
        .isString()
        .withMessage("Title should be text")
        .not()
        .isEmpty()
        .withMessage("Title is Required")
        .isLength({ max: 32 })
        .withMessage("Game must be contain maxium 32 characters"),
        check("description")
        .exists()
        .isString()
        .withMessage("Description should be text")
        .not()
        .isEmpty()
        .withMessage("Description is Required")
        .isLength({ max: 2000 })
        .withMessage("Description must be contain maxium 2000 characters"),
        check("description")
        .exists()
        .isString()
        .withMessage("Description should be text")
        .not()
        .isEmpty()
        .withMessage("Description is Required")
        .isLength({ max: 2000 })
        .withMessage("Description must be contain maxium 2000 characters"),
    check("genre")
        .exists()
        .withMessage("Description should be text")
        .not()
        .isEmpty()
        .withMessage("Genre is Required"),
    check("url")
        .exists()
        .isString()
        .withMessage("URL should be text"),
    check("platform")
        .exists()
        .withMessage("Platform should be text")
        .not()
        .isEmpty()
        .withMessage("Platform is Required"),
    check("mainImage")
        .exists()
        .withMessage("MainImage should be text")
        .not()
        .isEmpty()
        .withMessage("MainImage is Required"),

    (req, res, next) => {
        validateResult(req, res, next);
    },
];

const validateDeleteGame = [
    param("slug")
        .exists()
        .withMessage("Slug should be text")
        .not()
        .isEmpty()
        .withMessage("Slug is Required")
        .isLowercase()
        .withMessage("Slug should be pas in lowercase"),
    (req, res, next) => {
        validateResult(req, res, next);
    },
]

module.exports = { validateCreateGame, validateUpdateGame, validateDeleteGame };