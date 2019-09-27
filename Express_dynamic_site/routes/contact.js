const express = require('express')
const router = express.Router()
const { check } = require('express-validator')

const contactController = require('../controllers/contact')

router.get('/contact', contactController.getContact)
router.post(
  '/contact',
  [
    check('email')
      .isEmail()
      .withMessage('Please provide correct email'),
    check('name')
      .not()
      .isEmpty()
      .trim()
      .escape()
      .withMessage()
  ],
  contactController.sendContactInfo
)

module.exports = router
