const express = require('express');
const router = express.Router();
const db = require('../config/db');

// CREATE - Lisää uuden arvosanan opiskelijalle
router.post('/', async (req, res) => {
  const {id_opiskelija, id_opintojakso, Arvosana, Paivamaara} = req.body;

  if (!id_opiskelija || !id_opintojakso || Arvosana === undefined || !Paivamaara) {
    return res.status(400).json({error:'Kaikki kentät ovat pakollisia'});
  }

  try {
    const query = 'INSERT INTO arviointi (id_opiskelija, id_opintojakso, Arvosana, Paivamaara) VALUES (?, ?, ?, ?)';
    const [result] = await db.query(query, [id_opiskelija, id_opintojakso, Arvosana, Paivamaara]);

    res.status(201).json({
      message: 'Arviointi tallennettu',
      id_arviointi: result.insertId
    });
  } catch (error) {
    res.status(500).json({error:'Arvioinnin tallennus epäonnistui', details: error.message});
  }
});

// READ - Hakee kaikki arvioinnit
router.get('/', async (req, res) => {
  try {
    const query = `
      SELECT 
        arviointi.id_arviointi,
        arviointi.Arvosana,
        arviointi.Paivamaara,
        opiskelija.Etunimi,
        opiskelija.Sukunimi,
        opintojakso.Nimi AS Kurssi
      FROM arviointi
      JOIN opiskelija ON arviointi.id_opiskelija = opiskelija.id_opiskelija
      JOIN opintojakso ON arviointi.id_opintojakso = opintojakso.id_opintojakso
    `;
    const [rows] = await db.query(query);
    res.json(rows);
  } catch (error) {
    res.status(500).json({error:'Arviointien haku epäonnistui', details: error.message});
  }
});

// READ - aliohjelma (Hakee tietyn opiskelijan kaikki arvioinnit)
router.get('/opiskelija/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const [result] = await db.query('CALL HaeOpiskelijanArvosanat(?)', [id]);
    res.json(result[0]);
  } catch (error) {
    res.status(500).json({error:'Opiskelijan arvosanojen haku epäonnistui', details: error.message});
  }
});

// UPDATE - Päivittää arviointia
router.put('/:id', async (req, res) => {
  const {id} = req.params;
  const {id_opiskelija, id_opintojakso, Arvosana, Paivamaara} = req.body;

  try {
    const query = 'UPDATE arviointi SET id_opiskelija = ?, id_opintojakso = ?, Arvosana = ?, Paivamaara = ? WHERE id_arviointi = ?';
    const [result] = await db.query(query, [id_opiskelija, id_opintojakso, Arvosana, Paivamaara, id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({error:'Arviointia ei löytynyt'});
    }

    res.json({message:'Arviointi päivitetty'});
  } catch (error) {
    res.status(500).json({error:'Arvioinnin päivitys epäonnistui', details: error.message});
  }
});

// DELETE - Poistaa arviointeja
router.delete('/:id', async (req, res) => {
  const {id} = req.params;

  try {
    const [result] = await db.query('DELETE FROM arviointi WHERE id_arviointi = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({error:'Arviointia ei löytynyt'});
    }

    res.json({ message: 'Arviointi poistettu' });
  } catch (error) {
    res.status(500).json({error:'Arvioinnin poisto epäonnistui', details: error.message});
  }
});

module.exports = router;