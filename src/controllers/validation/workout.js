const { body, validationResult } = require('express-validator');

const validationRules = () => {
    return [
    !body('name'),
    !body('mode'),
    !body('equipment'),
    !body('exercises'),
    !body('trainerTips')
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
  validationRules,
  validate,
}