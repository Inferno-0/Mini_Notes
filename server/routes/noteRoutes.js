const express = require('express');
const rateLimit = require('express-rate-limit');
const { getNotes, createNote, deleteNote } = require('../controllers/noteController');

const router = express.Router();
const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { message: 'Too many requests, please try again later.' },
});

router.get('/', getNotes);
router.post('/', writeLimiter, createNote);
router.delete('/:id', writeLimiter, deleteNote);

module.exports = router;
