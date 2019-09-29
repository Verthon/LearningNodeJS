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
      .normalizeEmail(),
    body('name').isString(),
    body('message')
      .isLength({ min: 5, max: 400 })
      .trim()
  ],
  contactController.sendContactInfo
)

module.exports = router
