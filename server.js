const express = require('express');
const db = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware JSON-datan lukemiseen
app.use(express.json());

// Reittien tuonti
const authRoutes = require('./routes/authRoutes');
const opiskelijaRoutes = require('./routes/opiskelija');
<<<<<<< HEAD
const opintojaksoRoutes = require('./routes/opintojakso');
const arviointiRoutes = require('./routes/arviointi');
=======
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6

// Reittien käyttöönotto
app.use('/api/auth', authRoutes);
app.use('/api/opiskelija', opiskelijaRoutes);
<<<<<<< HEAD
app.use('/api/opintojakso', opintojaksoRoutes);
app.use('/api/arviointi', arviointiRoutes);

// Perusreitit testaukseen
app.get('/', (req, res) => {
    res.json({message:"Opintorekisteri API käynnissä!"});
=======

// Perusreitit testaukseen
app.get('/', (req, res) => {
    res.json({ message: "Opintorekisteri API käynnissä!" });
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
});

app.get('/test-db', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM opiskelija');
<<<<<<< HEAD
        res.json({message:"Tietokantayhteys muodostettu!", data: rows});
    } catch (error) {
        res.status(500).json({error:"Tietokantayhteys epäonnistui", details: error.message});
=======
        res.json({ message: "Tietokantayhteys toimii loistavasti!", data: rows });
    } catch (error) {
        res.status(500).json({ error: "Tietokantayhteys epäonnistui", details: error.message });
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
    }
});

app.listen(PORT, () => {
<<<<<<< HEAD
    console.log(`Palvelin käynnistetty osoitteessa: http://localhost:${PORT}/`);
=======
    console.log(`Palvelin käynnistetty osoitteessa: http://localhost:${PORT}`);
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
});