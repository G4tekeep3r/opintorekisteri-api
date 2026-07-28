const express = require('express');
const router = express.Router();
const db = require('../config/db');

// CREATE - Lisää uusi opintojakso
router.post('/', async (req, res) => {
  const {Koodi, Nimi, Laajuus} = req.body;

  if (!Koodi || !Nimi || !Laajuus) {
    return res.status(400).json({error:'Kaikki kentät (Koodi, Nimi, Laajuus) ovat pakollisia'});
  }

  try {
    const query = 'INSERT INTO opintojakso (Koodi, Nimi, Laajuus) VALUES (?, ?, ?)';
    const [result] = await db.query(query, [Koodi, Nimi, Laajuus]);

    res.status(201).json({
      message: 'Opintojakso lisätty onnistuneesti',
      id_opintojakso: result.insertId
    });
  } catch (error) {
    res.status(500).json({error:'Opintojakson lisääminen epäonnistui', details: error.message});
  }
});

// READ - Hae kaikki opintojaksot
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM opintojakso');
    res.json(rows);
  } catch (error) {
    res.status(500).json({error:'Opintojaksojen haku epäonnistui', details: error.message});
  }
});

// UPDATE - Päivitä opintojakson tiedot
router.put('/:id', async (req, res) => {
  const {id} = req.params;
  const {Koodi, Nimi, Laajuus} = req.body;

  try {
    const query = 'UPDATE opintojakso SET Koodi = ?, Nimi = ?, Laajuus = ? WHERE id_opintojakso = ?';
    const [result] = await db.query(query, [Koodi, Nimi, Laajuus, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({error:'Opintojaksoa ei löytynyt'});
    }

    res.json({message:'Opintojakson tiedot päivitetty'});
  } catch (error) {
    res.status(500).json({error:'Päivitys epäonnistui', details: error.message});
  }
});

// DELETE - Poista opintojakso
router.delete('/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const [result] = await db.query('DELETE FROM opintojakso WHERE id_opintojakso = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({error:'Opintojaksoa ei löytynyt'});
    }

    res.json({message:'Opintojakso poistettu onnistuneesti'});
  } catch (error) {
    res.status(500).json({error:'Poisto epäonnistui', details: error.message});
  }
});

module.exports = router;