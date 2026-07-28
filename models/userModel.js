const db = require('../config/db');

const User = {
<<<<<<< HEAD
    // Etsii käyttäjänimen perusteella kirjautumista varten
    findByUsername: async (username) => {
        const [rows] = await db.query('SELECT * FROM user WHERE username = ?', [username]);
        return rows[0]; // Palauttaa löytyneen käyttäjän
    },

    // Tallentaa uuden käyttäjän tietokantaan rekisteröitymistä varten
=======
    // Etsitään käyttäjä nimen perusteella kirjautumista varten
    findByUsername: async (username) => {
        const [rows] = await db.query('SELECT * FROM user WHERE username = ?', [username]);
        return rows[0]; // Palauttaa löytyneen käyttäjän tai undefined
    },

    // Tallennetaan uusi käyttäjä tietokantaan rekisteröitymistä varten
>>>>>>> 69fc3102ea0b1a63446f3b1a5281b2b30549d8f6
    create: async (username, hashedPassword) => {
        const [result] = await db.query(
            'INSERT INTO user (username, password) VALUES (?, ?)', 
            [username, hashedPassword]
        );
        return result.insertId;
    }
};

module.exports = User;