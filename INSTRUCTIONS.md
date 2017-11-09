# Instrucțiuni de conversie la JSON

## Artiști

Coloanele din excel vor fi mapate pe următoarele câmpuri din JSON:

* `Numărul rândului`: id
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

Ca exemplu poate fi folosit `AlexCălin.json` din directorul `_raw_data/artists`. Tot acolo vor fi salvate și celelalți artiști, unul câte unul.

## Festivaluri

Coloanele din excel vor fi mapate pe următoarele câmpuri din JSON:

* `Numărul rândului`: id
* `Timestamp`: nimic
* `Titlu`: titlu
* `Link-uri către site-ul festivalului și/sau rețele de socializare`: website
* `Organizatori/coorganizatori`: organizatori
* `Descriere (max. 200 de cuvinte)`: descriere
* `Afiș/foto reprezentativă (max 1 mb)`: foto_afis
* `Credit foto`: foto_credit
* `Email de contact (privat, va fi folosit doar de dancecloud.ro)`: email

**ATENȚIE**:

1. Textul din câmpul `descriere` trebuie formatat înainte cu <http://textmechanic.com/text-tools/basic-text-tools/addremove-line-breaks/>
1. Inainte de a fi salvat fișierul trebuie verificat cu <https://jsonlint.com/>

Ca exemplu poate fi folosit `EHTET.json` din directorul `_raw_data/festivals`. Tot acolo vor fi salvate și celelalte festivaluri, unul câte unul.

## Publicații

Coloanele din excel vor fi mapate pe următoarele câmpuri din JSON:

* `Numărul rândului`: id
* `Timestamp`: nimic
* `Titlul`: titlu
* `Autorul/ redactorul-șef`: autor
* `Editura`: editura
* `Data și locul apariţiei`: data_publicarii
* `Fotografie de copertă/ fotografie reprezentativă (max. 1mb)`: foto_coperta
* `Credit foto copertă`: foto_credit
* `Descriere a cărţii/ publicației și sursa descrierii (max. 100 de cuvinte)`: descriere și descriere_sursa
* `Email de contact (privat, va fi folosit doar de dancecloud.ro)`: contact

**ATENȚIE**:

1. Textul din câmpul `descriere` trebuie formatat înainte cu <http://textmechanic.com/text-tools/basic-text-tools/addremove-line-breaks/>
1. Inainte de a fi salvat fișierul trebuie verificat cu <https://jsonlint.com/>

Ca exemplu poate fi folosit `Formă_și_sunet.json` din directorul `_raw_data/publications`. Tot acolo vor fi salvate și celelalte publicații, una câte una.

## Spectacole

Coloanele din excel vor fi mapate pe următoarele câmpuri din JSON:

* `Numărul rândului`: id
* `Timestamp`: nimic
* `Titlul`: titlu
* `Anul producției`: an
* `Durata`: durata
* `Regizor/Coregraf`: regizor
* `Echipa de creație/producție`: echipa
* `Distribuție`: distributie
* `Producători/coproducători`: producatori
* `Afiș/foto reprezentativă (max 1 mb)`: foto_afis
* `Credit foto (dacă este cazul)`: foto_credit
* `Link trailer/video prezentare`: trailer
* `Descriere (max. 150 de cuvinte)`: descriere
* `Data, ora și locul reprezentațiilor viitoare (dacă e cazul)`: date_reprezentatii

**ATENȚIE**:

1. Textul din câmpurile `echipa` și `descriere` trebuie formatate înainte cu <http://textmechanic.com/text-tools/basic-text-tools/addremove-line-breaks/>
1. Câmpul `date_reprezentatii` este o listă cu toate datele
1. Inainte de a fi salvat fișierul trebuie verificat cu <https://jsonlint.com/>

Ca exemplu poate fi folosit `COUNTERBODY.json` din directorul `_raw_data/shows`. Tot acolo vor fi salvate și celelalte publicații, una câte una.

## Organizații

Coloanele din excel vor fi mapate pe următoarele câmpuri din JSON:

* `Numărul rândului`: id
* `Timestamp`: nimic
* `Denumire`: denumire
* `Secțiunea la care va fi înscris profilul`: sectiune
* `Fotografie reprezentativă (max1mb)`: foto
* `Credit foto`: foto_credit
* `Link-uri către site propriu și/sau rețele de socializare`: social-media
* `Descriere (max.200 de cuvinte)`: descriere
* `Proiecte relevante trecute sau încă în derulare (evenimente, prezentări, ateliere etc.)`: proiecte
* `Proiecte viitoare (evenimente, prezentări, ateliere etc.)`: proiecte_viitoare
* `Detalii de contact (public)`: contact
* `Email de contact (privat, va fi folosit doar de dancecloud.ro)`: contact_privat

**ATENȚIE**:

1. Textul din câmpurile `descriere`, `proiecte`, `proiecte_viitoare` și `contact` trebuie formatate înainte cu <http://textmechanic.com/text-tools/basic-text-tools/addremove-line-breaks/>
1. Câmpul `date_reprezentatii` este o listă cu toate datele
1. Inainte de a fi salvat fișierul trebuie verificat cu <https://jsonlint.com/>

Ca exemplu poate fi folosit `Ansamblul_Nagyvárad.json` din directorul `_raw_data/organisations`. Tot acolo vor fi salvate și celelalte organizații, una câte una.
