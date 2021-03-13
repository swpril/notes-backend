const express = require('express');
const shortid = require('shortid');

const Note = require('../models/notes');

const router = new express.Router();

router.post('/', async (req, res) => {
  const shortId = shortid.generate();
  const note = { ...req.body, uniqueId: shortId };
  const notes = new Note(note);
  try {
    await notes.save();
    res.status(201).send(shortId);
  } catch (e) {
    res.status(400).send();
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findOne({ uniqueId: id });
    if (!note) throw new Error();
    res.send(note);
  } catch (e) {
    res.status(404).send();
  }
});

module.exports = router;
