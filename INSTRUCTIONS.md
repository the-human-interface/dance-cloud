# Instrucțiuni de conversie la JSON

## Artiști

Coloanele din excel vor fi mapate pe următoarele câmpuri din JSON:

* `Timestamp`: nimic
* `Secțiunea la care va fi înscris profilul`: sectiune
* `Prenume și nume`: nume
* `Link (sau linkuri) către site propriu, rețele de socializare`: social-media
* `Fotografie de profil (imagine, max. 1mb)`: foto
* `Credit foto`: foto_credit
* `Biografie (max. 200 de cuvinte)`: bio
* `Proiecte relevante în care ați fost implicat(ă)  (evenimente, prezentări, ateliere) [listă]`: proiecte
* `Proiecte viitoare (evenimente, prezentări, ateliere programate în viitorul apropiat) [listă]`: proiecte_viitoare
* `Linkuri către articole din presă, materiale comunicate public despre propria activitate`: presa
* `Detalii de contact publice (mail, număr de telefon, adresă, etc.) - opțional`: contact
* `Adresă de mail de contact (privat, folosit doar de către dancecloud.ro)`: contact_privat

**ATENȚIE**:

1. Câmpul `sectiune` poate avea numai aceste valori: `coregrafi`, `dansatori`, `profesori`. Orice valoare din Excel trebuie înlocuită cu una dintre aceste valori.
1. Textul din câmpurile `bio`, `proiecte`, `proiecte_viitoare` și `presa` trebuie formatate înainte cu <http://textmechanic.com/text-tools/basic-text-tools/addremove-line-breaks/>
1. Inainte de a fi salvat fișierul trebuie verificat cu <https://jsonlint.com/>

Ca exemplu poate fi folosit `AlexCălin.json` din directorul `_raw_data/artists`. Tot acolo vor fi salvate și celelalte valori din Excel.
