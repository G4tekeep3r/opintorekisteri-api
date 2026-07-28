**Esittelyvideo** (LITA_TÄHÄN_LIIKKI_VIDEOOSI)


**Kuvaus ja toiminta**

Tämä on REST API -rajapinta opintorekisteritietojen hallintaan. Sovelluksella voidaan suorittaa CRUD-toimintoja (Create, Read, Update, Delete) opiskelijoille, opintojaksoille ja arvioinneille. 

Sovellus on rakennettu Node.js- ja Express -kehyksillä, tietokantana MySQL. Hakutoiminnoissa hyödynnetään MySQL:n tallennettua aliohjelmaa (HaeOpiskelijanArvosanat).


**ER-DIAGRAMMI**

Opiskelija - Yhdellä opiskelijalla voi olla useita arviointeja.
Opintojakso - Yhdellä opintojaksolla voi olla useita arviointeja.
Arviointi - Yhdellä opiskelijalla voi olla useita arviointeja ja opintojaksoja. Toimii liitostauluna opiskelijan ja opintojakson välillä.