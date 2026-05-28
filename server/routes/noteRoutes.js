const express = require('express');
const rateLimit = require('express-rate-limit');
const { getNotes, createNote, deleteNote } = require('../controllers/noteController');

const router = express.Router();
const readLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  message: { message: 'Too many requests, please try again later.' },
});
const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { message: 'Too many requests, please try again later.' },
});

router.get('/', readLimiter, getNotes);
router.post('/', writeLimiter, createNote);
router.delete('/:id', writeLimiter, deleteNote);

module.exports = router;
