const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Käyttäjän rekisteröinti
exports.register = async (req, res) => {
    try {
<<<<<<< HEAD
        const {username, password} = req.body;

        // Molempien tietojen syötön tarkistus
        if (!username || !password) {
            return res.status(400).json({error:"Käyttäjätunnus ja salasana vaaditaan"});
=======
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ error: "Käyttäjätunnus ja salasana vaaditaan" });
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
        }

        // Salasanan kryptaus
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tallennetaan tietokantaan
        await User.create(username, hashedPassword);

<<<<<<< HEAD
        res.status(201).json({message:"Käyttäjätunnus luotu!"});
    } catch (error) {
        // Jos käyttäjätunnus on jo olemassa (tietokannassa UNIQUE-rajoite)
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({error:"Käyttäjätunnus on jo varattu."});
        }
        res.status(500).json({error:"Rekisteröityminen epäonnistui", details: error.message});
=======
        res.status(201).json({ message: "Käyttäjätunnus luotu onnistuneesti!" });
    } catch (error) {
        // Jos käyttäjätunnus on jo olemassa (tietokannassa UNIQUE-rajoite)
        if (error.code === 'ER_DUP_ENTRY') {
            return res.status(400).json({ error: "Käyttäjätunnus on jo varattu." });
        }
        res.status(500).json({ error: "Rekisteröityminen epäonnistui", details: error.message });
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
    }
};

// Käyttäjän kirjautuminen (Token palautus)
exports.login = async (req, res) => {
    try {
<<<<<<< HEAD
        const {username, password} = req.body;
=======
        const { username, password } = req.body;
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6

        // Etsitään käyttäjä tietokannasta
        const user = await User.findByUsername(username);
        if (!user) {
<<<<<<< HEAD
            return res.status(401).json({error:"Väärä käyttäjätunnus tai salasana."});
=======
            return res.status(401).json({ error: "Väärä käyttäjätunnus tai salasana." });
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
        }

        // Verrataan annettua salasanaa tietokannan kryptattuun versioon
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
<<<<<<< HEAD
            return res.status(401).json({error:"Väärä käyttäjätunnus tai salasana."});
=======
            return res.status(401).json({ error: "Väärä käyttäjätunnus tai salasana." });
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
        }

        // Web Token joka vanhenee 1 tunnissa
        const token = jwt.sign(
<<<<<<< HEAD
            {id: user.id_user, username: user.username}, 
            process.env.JWT_SECRET, 
            {expiresIn: '1h'}
        );

        res.json({message:"Kirjautuminen onnistui!", token});
    } catch (error) {
        res.status(500).json({error: "Kirjautuminen epäonnistui", details: error.message});
=======
            { id: user.id_user, username: user.username }, 
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );

        res.json({ message: "Kirjautuminen onnistui!", token });
    } catch (error) {
        res.status(500).json({ error: "Kirjautuminen epäonnistui", details: error.message });
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
    }
};