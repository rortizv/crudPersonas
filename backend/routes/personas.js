const router = require('express').Router();
let Persona = require('../models/persona.model');

router.route('/').get((req, res) => {
    Persona.find()
        .then(personas => res.json(personas))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const usuario = req.body.usuario;
    const password = req.body.password;
    const primnom = req.body.primnom;
    const segnom = req.body.segnom;
    const primapel = req.body.primapel;
    const segapel = req.body.segapel;

    const newPersona = new Persona({
        usuario,
        password,
        primnom,
        segnom,
        primapel,
        segapel,
    });

    newPersona.save()
        .then(() => res.json('Persona added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/id:').get((req, res) => {
    Persona.findById(req.params.id)
        .then(persona => res.json(persona))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/:id').delete((req, res) => {
    Persona.findByIdAndDelete(req.params.id)
        .then(() => res.json('Persona deleted!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

router.route('/update/:id').post((req, res) => {
    Persona.findById(req.params.id)
        .then(persona => {
            persona.usuario = req.body.usuario;
            persona.password = req.body.password;
            persona.primnom = req.body.primnom;
            persona.segnom = req.body.segnom;
            persona.primapel = req.body.primapel;
            persona.segapel = req.body.segapel;

            persona.save()
                .then(() => res.json('Persona updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;