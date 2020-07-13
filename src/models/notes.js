const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 6,
        required: true,
        trim: true
    },
    uniqueId: {
        type: String,
        trim: true,
        required: true
    },
    notes: {
        type: String,
        trim: true,
        required: true,
    }
});

const Note = mongoose.model('Note', notesSchema);

module.exports = Note;