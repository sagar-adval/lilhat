const {body} = require('express-validator');

//() at the end makes this function self-invoking
const rules = (() => {
    return [
        body('email').isEmail(),
        body('password').isLength({min:5}),
    ]
})();

module.exports = {rules};
