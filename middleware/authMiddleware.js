const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    // Haetaan token pyynnön otsikkotiedoista
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // Jos tokenia ei ole ollenkaan mukana pyynnössä
    if (!token) {
        return res.status(401).json({error:"Pääsy evätty. Token puuttuu."});
    }

    try {
        // Varmistetaan tokenin oikeellisuus .env-tiedoston avaimella
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Tallennetaan käyttäjän tiedot pyyntöön
        next();
    } catch (error) {
        res.status(403).json({error:"Virheellinen tai vanhentunut token."});
    }
};