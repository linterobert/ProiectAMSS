# ProiectAMSS

#### **_Descrierea proiectului_**
ArtisanMarket este mai mult decât o simplă platformă de comerț electronic; este un ecosistem dedicat pasionaților de produse handmade. Fiecare creator beneficiază de un profil personalizat, oferind cumpărătorilor o privire detaliată asupra poveștii și procesului lor de creație. Fiecare profil ofera cumparatorilor si abilitatea de a-si salva produsele favorite. Catalogul diversificat de produse handmade, de la bijuterii la decorațiuni și haine, adună o varietate de opere unice pentru toate gusturile. Sistemul transparent de recenzii și evaluări construiește încrederea în comunitatea ArtisanMarket. Permite cumpărătorilor să împărtășească experiențele lor și să aprecieze munca creatorilor prin sistemul de review-uri.

ArtisanMarket nu se rezumă doar la vânzare; este și un spațiu interactiv pentru creșterea și conectarea comunității creative. Creatorii beneficiază de instrumente de promovare și marketing integrate pentru a-și spori vizibilitatea prin sistemul de ads. Acestia pot adauga orice produs atata timp cat el corespunde regulilor site-ului. Produsul poate fi adaugat ca Draft (vizibil doar de catre vanzator) sau ca Ads (vizibil pentru orice cumparator). Cu un proces de plată securizat și asistență clienți dedicată, ArtisanMarket se angajează să ofere o experiență completă, conectând iubitorii de handmade cu lucrări autentice și sprijinind astfel creșterea comunității creative și a economiei locale.

#### **_Cerințe Funcționale_**

##### 1. Gestionarea Profilurilor Utilizatorilor:
  - Fiecare utilizator (creator sau cumpărător) trebuie să aibă un profil personalizat care să includă informații despre povestea și procesul de creație.
  - Creatorii pot gestiona produsele, recenziile și campaniile lor de marketing direct din profil.
    
##### 2. Gestionarea Produselor:
  - Creatorii pot adăuga produse sub formă de Draft sau Ads, conform regulilor platformei.
  - Fiecare produs trebuie să aibă detalii precum nume, descriere, preț, imagini și data adăugării.
    
##### 3. Funcționalități de Navigare și Căutare:
  - Utilizatorii pot căuta produse în funcție de categorii (bijuterii, decorațiuni, haine etc.).
  - Sistemul de filtrare și sortare trebuie să fie disponibil pentru a îmbunătăți experiența de căutare.
    
##### 4. Sistem de Recenzii și Evaluări:
  - Cumpărătorii pot lăsa recenzii și evaluări pentru produsele achiziționate, ajutând la construirea încrederii în comunitatea ArtisanMarket.
  - Creatorii pot vizualiza și răspunde la recenzii.

##### 5. Favoritarea Produselor:
  - Cumpărătorii pot salva produse ca favorite pentru a le putea vizualiza mai târziu.

##### 6. Gestionarea Comenzilor și Plăților:
  - Sistemul trebuie să suporte un proces de plată securizat pentru tranzacțiile dintre cumpărători și creatori.
  - Detalii despre comandă și statusul acesteia trebuie să fie vizibile pentru utilizatori.

##### 7. Instrumente de Promovare și Marketing:
  - Creatorii pot utiliza instrumente de marketing integrate pentru a-și crește vizibilitatea pe platformă.

##### 8. Administrare și Moderare:
  - Administratorii site-ului trebuie să poată modera conținutul, gestionând recenziile, produsele și profilurile pentru a asigura respectarea regulilor platformei.

#### Cerințe Non-Funcționale

##### 1. Securitate:
  - Sistemul de autentificare trebuie să fie securizat, protejând datele utilizatorilor și tranzacțiile financiare.
  - Asigurarea protecției datelor personale conform reglementărilor GDPR.

##### 2. Performanță și Scalabilitate:
  - Platforma trebuie să fie capabilă să gestioneze un număr mare de utilizatori și produse fără degradarea performanței.
  - Timpul de încărcare al paginilor trebuie să fie minim, optimizând experiența utilizatorului.

##### 3. Fiabilitate și Disponibilitate:
  - Sistemul trebuie să fie disponibil 24/7, minimizând downtime-ul și având proceduri de backup și recuperare a datelor.
  - Gestionarea erorilor trebuie să fie eficientă, cu mesaje de eroare clare și logare adecvată a problemelor.

##### 4. Ușurință în Utilizare (Usability):
  - Interfața utilizatorului trebuie să fie intuitivă, ușor de navigat și adaptată pentru toate tipurile de dispozitive (responsive).
  - Formularele și procesele (cum ar fi adăugarea produselor sau procesul de plată) trebuie să fie simple și ușor de folosit.

##### 5. Compatibilitate:
  - Platforma trebuie să fie compatibilă cu cele mai comune browsere (Chrome, Firefox, Safari, Edge) și să fie accesibilă pe desktop și dispozitive mobile.

##### 6. Mentenanță și Extensibilitate:
  - Codul trebuie să fie scris și documentat clar, permițând dezvoltatorilor să extindă sau să ajusteze platforma cu ușurință.
  - Sistemul de versiuni și actualizări trebuie să fie implementat pentru a menține software-ul actualizat și securizat.

Aceste cerințe vor asigura că platforma ArtisanMarket funcționează eficient, oferind o experiență sigură și satisfăcătoare atât pentru creatori, cât și pentru cumpărători, și contribuind la creșterea comunității creative.

#### Design Patterns

##### 1. Repository Pattern
  - Fișiere in care este implementat: IProductRepository.cs, IReviewRepository.cs, IProductImageRepository.cs, IGenericRepository.cs
  - Descriere: Acest pattern este utilizat pentru a separa logica de acces la date de logica de business. Interfețele și implementările repository-urilor gestionează operațiunile CRUD asupra entităților fără a expune detaliile bazei de date.
  - Beneficii: Îmbunătățește testabilitatea și menținerea codului, permițând schimbarea ușoară a sursei de date fără a afecta logica de business.

##### 2. Unit of Work Pattern
  - Fișiere in care este implementat: IUnitOfWork.cs
  - Descriere: Unit of Work este un pattern folosit pentru a coordona schimbările la mai multe repository-uri într-o singură tranzacție. Acesta gestionează commit-urile și rollback-urile, asigurând că toate operațiunile dintr-o tranzacție fie sunt finalizate cu succes, fie sunt anulate complet.
  - Beneficii: Reduce numărul de tranzacții la nivel de bază de date și gestionează schimbările de stare pentru obiecte în mod coerent.

##### 3. Command Pattern
  - Fișiere in care este implementat: CreateProductCommand.cs, UpdateProductCommand.cs, DeleteProductCommand.cs, CreateReviewCommand.cs, DeleteReviewCommand.cs, etc.
  - Descriere: Command Pattern este utilizat pentru a încapsula toate informațiile necesare pentru a efectua o acțiune sau a declanșa un eveniment într-un singur obiect. Command-urile permit separarea logica acțiunii de invocare.
  - Beneficii: Simplifică executarea și manipularea operațiunilor complexe.

##### 4. Handler Pattern 
  - Fișiere in care este implementat: CreateProductCommandHandlers.cs, UpdateProductCommandHandlers.cs, DeleteProductCommandHandler.cs, etc.
  - Descriere: Handlerele sunt parte din Mediator Pattern, utilizat în special în CQRS (Command Query Responsibility Segregation) pentru a gestiona cererile venite de la comenzi sau query-uri. Fiecare handler tratează un tip specific de comandă sau query.
  - Beneficii: Decuplează expeditorii de comenzi de executanții lor, ceea ce duce la un cod mai clar, organizat și ușor de extins sau modificat.

##### 5. DTO (Data Transfer Object) Pattern
  - Fișiere in care este implementat: CreateProductDTO.cs, CreateReviewDTO.cs, LoginUserDTO.cs, etc.
  - Descriere: DTO este un pattern folosit pentru a transporta date între straturile unei aplicații. DTO-urile sunt utilizate pentru a reduce numărul de apeluri între client și server, prin combinarea mai multor valori într-un singur obiect.
  - Beneficii: Reduc numărul de apeluri la server, simplifică procesul de mapare și transformare a datelor, și crește performanța generală.

##### 6. Dependency Injection (DI) Pattern
  - Fișiere in care este implementat: Observabil din utilizarea serviciilor și repository-urilor în handleri și comenzi.
  - Descriere: DI este un pattern care injectează dependențele necesare unui obiect din exterior, mai degrabă decât să le creeze intern. Acest lucru este vizibil în serviciile și repository-urile care sunt furnizate handlerelor și componentelor.
  - Beneficii: Crește testabilitatea și flexibilitatea codului, îmbunătățește separarea responsabilităților și facilitează gestionarea ciclului de viață al obiectelor.

Aceste design patterns contribuie la structura robustă, scalabilă și ușor de întreținut a proiectului ArtisanMarket, permițând dezvoltarea și extinderea facilă a funcționalităților platformei.

#### **_Diagrama Stărilor_**
![E-commerce_platform_for_handmade_products](https://github.com/linterobert/Proiect-MOPS/assets/73032808/82d5f20a-5ad7-4eff-a391-d49eac059b19)

#### **_Diagrama Use-Case_**
![Use_case_diagram_E-commerce_platform_for_handmade_products](https://github.com/linterobert/Proiect-MOPS/assets/73032808/fb4384c5-393b-4d4c-abcc-5e7f8024b7f9)

#### **_Diagrama flowchart_**
![Flowchart_Diagram](https://github.com/linterobert/Proiect-MOPS/assets/80642370/cd3a77d9-f723-401b-9f46-3e1d84612235)

#### **_Diagrama UML_**
![UML_Diagram](https://github.com/linterobert/Proiect-MOPS/assets/73032808/4848c382-571a-479f-9d4e-c041002ef1e3)

#### **_Diagrama bazei de date_**
![image](https://github.com/linterobert/Proiect-MOPS/assets/80642370/776f2b50-f8d5-4260-aec3-0992464f7803)

#### **_Diagrama de pachete_**
![859e44b3-a0d9-4283-8d31-1b4462ead17f](https://github.com/linterobert/Proiect-MOPS/assets/73032808/eecca53f-b993-4ee1-8d9a-f9016529228c)

#### **_Diagrama componente_**
![WhatsApp Image 2024-01-16 at 12 24 07](https://github.com/linterobert/Proiect-AMSS/assets/80642370/064997de-61b1-423d-8629-12c7d323b368)


#### **_Diagrama de deployment_**
![759bc3ab-9b23-4af1-abbd-3d20cb0e6f97](https://github.com/linterobert/Proiect-MOPS/assets/73032808/6b08a5fe-a0ef-4b3c-9f4a-22c66c03101c)

#### **_Diagrama de interactiune_**
![seq](https://github.com/linterobert/Proiect-MOPS/assets/73032808/3c289bd8-4317-4bd7-bd48-1acd22023ee4)

