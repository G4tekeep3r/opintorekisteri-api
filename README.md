**ESITTELYVIDEO:**

https://youtu.be/1X1is6jJFNI?si=FThSC35Qkz9lE5F4


**KUVAUS JA TOIMINTA**


REST API -rajapinta opintorekisteritietojen hallintaan. Sovelluksella voidaan suorittaa CRUD-toimintoja (Create, Read, Update, Delete) opiskelijoille, opintojaksoille ja arvioinneille. 

Sovellus on rakennettu Node.js- ja Express -kehyksillä, tietokantana MySQL. Hakutoiminnoissa hyödynnetään lisäksi myös erillistä MySQL:n tallennettua aliohjelmaa (HaeOpiskelijanArvosanat).

Node.js / Express – Taustajärjestelmä ja reititys

MySQL (mysql2) – Tietokanta ja asynkroniset kyselyt (PromisePool)

jsonwebtoken (JWT) – Tunnistautuminen ja rajapintojen suojaus

bcrypt – Salasanojen kryptaus

dotenv – Ympäristömuuttujien hallinta


**ER-DIAGRAMMI**

Opiskelija - Yhdellä opiskelijalla voi olla useita arviointeja.

Opintojakso - Yhdellä opintojaksolla voi olla useita arviointeja.

Arviointi - Yhdellä opiskelijalla voi olla useita arviointeja ja opintojaksoja. Toimii liitostauluna opiskelijan ja opintojakson välillä.

User - Erillinen taulu käyttäjätunnusten ja salasanojen tallennukseen ja suojaamiseen.