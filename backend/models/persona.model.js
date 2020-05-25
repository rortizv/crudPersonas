const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personaSchema = new Schema({
    usuario: { type: String, required: true },
    password: { type: String, required: true },
    primnom: { type: String, required: true },
    segnom: { type: String },
    primapel: { type: String, required: true},
    segapel: { type: String, required: true},
}, {
    timestamps: true,
});

const Persona = mongoose.model('Persona', personaSchema);

module.exports = Persona;