const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

const contactController = require('../controllers/contact')

router.get('/contact', contactController.getContact)
router.post(
  '/contact',
  [
    body('email')
      .isEmail()
      .withMessage('Please provide correct email')
      .normalizeEmail(),
    body('name').isString(),
    body('message')
      .isLength({ min: 5, max: 400 })
      .withMessage('Please provide a message')
  ],
  contactController.sendContactInfo
)

module.exports = router
