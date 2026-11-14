---
title: "Solnoder i Jönköping"
linkTitle: "Solnoder"
description: "Varför en repeater på solcell, vad som gör vintern svår på 57,8° nord, och vad som krävs: panel, batteri, laddare och firmware. Med batteritabeller och ett fälttest från hösten 2026."
weight: 40
draft: true
---

## Varför sol?

En repeater gör mest nytta högt upp med fri sikt: på en höjd, i en mast, vid en skogskant mot en
dal. Där finns sällan ett eluttag. En solcellsdriven repeater kan stå där den behövs i stället
för där det råkar finnas ström, och den fortsätter fungera när elnätet ligger nere.

Priset är att den måste klara sig själv hela vintern. En repeater på solcell klarar sommaren
nästan oavsett hur den byggs; det är vintern som avgör hur stort batteri som behövs och hur
panelen ska sitta. Siffrorna på den här sidan gäller ett vanligt bygge med
[Clas Ohlsons panel](https://www.clasohlson.com/se/Northlight-Flexible-Solar-System-solpanel-15-W/p/36-9423)
i Jönköpingstrakten, och de är räknade för **den sämsta vintern på fem år, plus 20 procent
marginal**. En vinter av det slag som kommer en gång på hundra år klarar de inte säkert.

## Det korta svaret

- Panelen står lodrätt mot söder och träden når upp till 20° över horisonten: **9 000 mAh**.
  Det beräknade behovet är 6 800 mAh, med en osäkerhet från 5 700 till 8 300 mAh, och 9 000 mAh
  täcker hela spannet.
- Träd upp till 30°: 12 000 mAh.
- Med officiell MeshCore-firmware i stället för strömsparversionen EasySkyMesh: ungefär
  18 000 mAh bakom träd upp till 20°.

Det som ändrar behovet mest är trädlinjen, panelens vinkel och hur mycket ström firmwaren drar.
Vädret en enskild vinter betyder mindre.

## Utmaningen: vintern på 57,8° nord

Instrålning mot en lodrät panel mot söder, kWh/m² per dag, medel per månad 2005–2023 (PVGIS):

| Jan | Feb | Mar | Apr | Maj | Jun | Jul | Aug | Sep | Okt | Nov | Dec |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 0,86 | 1,70 | 3,06 | 3,67 | 3,32 | 3,25 | 3,12 | 2,97 | 2,78 | 1,99 | 0,90 | 0,62 |

- December ger 19 procent av junis ljus. En vanlig decemberdag ger 0,31 kWh/m², och varje
  vinter har en period på fem, sex dagar under 0,1.
- Middagssolen står bara cirka 10° över horisonten i början av december, 9° vid vintersolståndet
  och cirka 15° i slutet av januari.
- Bakom en trädlinje på 20° kommer ingen direkt sol alls från slutet av oktober till slutet av
  februari. Bakom 15° gäller det ungefär 20 november till slutet av januari. Då lever panelen
  bara på ljuset från himlen.
- Med en trädlinje på 20° runt om ger panelen per kilowatt märkeffekt 79 Wh per dag i december
  och 119 Wh i januari. Med fri horisont är det 656 och 912 Wh. Träden tar alltså bort nästan
  90 procent av december och januari.

Underskottet på vintern är därför inte otur. Det byggs upp från ungefär mitten av november till
slutet av januari varje år, och skiljer sig bara cirka ±15 procent mellan vintrar.

## Hjälper det att panelerna är kalla?

Det stämmer att en solcell ger mer i kyla, men för vintern spelar det nästan ingen roll.

| | Värde |
|---|---|
| Cellen vid −5 / −10 °C jämfört med databladets 25 °C | +11 % / +13 % |
| Vinsten som faktiskt kommer batteriet till godo, december–februari | +5–6 % |
| Instrålning i december jämfört med juni | 19 % |
| Energi i december jämfört med juni, allt inräknat | 21 % |

- Vinsten räknas per enhet solljus, och solljuset är litet. Den låga solen tar bort cirka
  2 500 Wh per kWp och dag jämfört med juni; kylan ger tillbaka cirka 40.
- En solbelyst panel är 10–20 °C varmare än luften, och de soliga vinterdagarna är oftast de
  mildare. När vinterns energi faktiskt kommer är cellerna därför runt +9 till +12 °C, inte −5.
- Svagt grått ljus omvandlas några procent sämre, vilket äter upp det mesta av köldvinsten.

Det som verkligen styr vinterskörden är trädlinjen, som tar bort cirka 90 procent av december
bakom 20°, och nysnö på marken, som kan ge upp till 15 procent mer i januari på en lodrät panel.

> [!NOTE]- Laddning av kalla celler
> Vid så små strömmar är risken begränsad men inte noll. Inga publicerade tester täcker så låga
> laddströmmar mellan 0 och −10 °C. Utifrån de data som finns hamnar gränsen ungefär vid
> 0,15–0,25 C vid −10 °C (1 C betyder att hela kapaciteten laddas på en timme). Vanlig
> vinterladdning av ett paket på 7 000 mAh ligger på 0,02–0,03 C, långt under. De ljusaste
> dagarna, ungefär en på tjugo, når den bästa timmen 0,24–0,33 C. Ett större paket eller en
> laddström begränsad till 1 A sänker toppen, och bakom en trädlinje på 20° är strömmarna i
> december och januari ungefär tio gånger mindre. Hälften av energin december–februari kommer när
> luften är under 0 °C, så en laddare som vägrar ladda under 0 °C kastar bort halva vintern.

## Vad som krävs

I korthet, för en nod som ska klara sig själv:

- **Panel:** Clas Ohlsons panel (urplockad, bara solcellsarket), **lodrät mot söder** om ingen
  borstar bort snön, och så fri sikt mot söder som platsen tillåter.
- **Batteri:** litiumjon, celler parallellt, med skyddskort, i en isolerad låda. Storleken beror
  på trädlinjen; se tabellerna nedan. 9 000 mAh räcker bakom träd upp till 20°.
- **Laddare:** en MPPT-solladdare (CN3791), inställd efter panelen. Undvik laddare som slutar
  ladda under 0 °C: hälften av vinterns energi kommer när det är minusgrader.
- **Firmware:** en strömsnål repeater. Med EasySkyMesh drar den cirka 4,5 mA i snitt, med
  officiell MeshCore cirka 7,1 mA, och det ändrar batteribehovet ungefär två gånger om.
- **Radio:** Seeed XIAO nRF52840 med Wio-SX1262, och inget annat som drar ström på batteriet.

Detaljerna står under [Vad siffrorna förutsätter](#vad-siffrorna-förutsätter).

## Hur stort batteri

### Efter batteriets kapacitet

Panelen lodrät mot söder. *Dagar i totalmörker* är hur länge batteriet ensamt håller repeatern
igång utan någon sol alls, med kyla, urladdningsgräns, åldrande och självurladdning inräknat.
*Klarar* betyder att batteriet aldrig går under 3,4 V under den sämsta vintern på fem år, med
marginalen.

| Batteri | Dagar i totalmörker | Klarar en dålig vinter med | Om beräkningen är för optimistisk | Med officiell firmware |
|---|---:|---|---|---|
| 3 000 mAh | 16 | bara fri horisont | bara fri horisont | bara fri horisont |
| 6 000 mAh | 32 | träd upp till 15° | träd upp till 10° | bara fri horisont |
| **9 000 mAh** | 47 | träd upp till 20° | träd upp till 20° | träd upp till 10° |
| 12 000 mAh | 61 | träd upp till 30° | träd upp till 30° | träd upp till 10° |
| 15 000 mAh | 75 | träd upp till 30° | träd upp till 30° | träd upp till 15° |
| 18 000 mAh | 89 | träd upp till 30° | träd upp till 30° | träd upp till 20° |
| 24 000 mAh | 115 | träd upp till 30° | träd upp till 30° | träd upp till 30° |

De 47 dagarna för 9 000 mAh är fler än den längsta solfria perioden som uppmätts i trakten. De
långa underskottsperioderna bakom träd är dunkla, inte mörka: panelen ger lite varje dag.

### Efter trädlinje och panelvinkel

Batteri i mAh för den sämsta vintern på fem år, med EasySkyMesh om inget annat står. Inom parentes
hur mycket beräkningen kan slå fel. 3 000 mAh är det praktiska golvet, vad tabellen än säger.

| Trädlinje, högsta punkt från sydost till sydväst | Lodrät, söder | 60° lutning, söder | 40° lutning, söder | Lodrät, officiell firmware |
|---|---:|---:|---:|---:|
| Inga träd, fri horisont | 500 (500–600) | 400 (400–400) | 400 (400–400) | 1 100 |
| Trädlinje 10° | 4 100 (3 600–4 800) | 700 (600–1 600) | 400 (400–500) | 8 400 |
| Trädlinje 15° | 5 700 (5 000–7 300) | 1 000 (600–2 000) | 400 (400–500) | 14 100 |
| Trädlinje 20° | 6 800 (5 700–8 300) | 1 400 (800–2 500) | 500 (400–600) | 15 600 |
| Trädlinje 30° | 9 300 (8 100–11 300) | 2 800 (2 100–4 100) | 600 (500–1 300) | 20 600 |

- **Mät trädlinjen:** ställ dig där panelen ska sitta, öppna en lutningsmätare (klinometer) i
  telefonen, svep från sydost via söder till sydväst och notera den högsta vinkel där träd, hus
  eller berg skär av himlen.
- **Lutning och snö:** en lutad panel ser mycket mer himmel och behöver därför mycket mindre
  batteri under en trädlinje, men bara om någon borstar bort snön. En panel på 60° håller snön
  ungefär lika länge som en på 40°; bara en lodrät panel blir fri av sig själv. Varje dag under
  snö kostar cirka 108 mAh (EasySkyMesh) eller 170 mAh (officiell firmware), så tre veckor med
  snö kräver cirka 3 900 mAh, mer än hela 60°-kolumnen. För en plats som ingen besöker på
  vintern: använd den lodräta kolumnen.
- **Riktning:** mot sydväst i stället för söder ändrar en öppen plats från 500 till 600 mAh, och
  under en trädlinje på 20° gör det ingen skillnad i beräkningen (i verkligheten har söder en
  liten fördel vid växlande moln). Mot väster fungerar inte, se fälttestet nedan.

## Vad ett riktigt test i Jönköping visade

Ett fälttest från 17 oktober till 13 november 2026 mätte en riktig laddaruppställning under
senhösten. Det är **inte** samma bygge som ovan: det använde en annan panel, en annan laddare och
ett fönster inomhus, så det prövar inte beräkningens siffror. Det visar hur en liten verklig
solcellsuppställning beter sig på senhösten.

**Uppställning:** panelen lodrätt i ett söderfönster inomhus, bakom två gamla glasrutor.
Laddaren HW-736, en billig linjär laddare som behöver cirka 4,7 V från panelen innan någon ström
går. Två billiga 18650-celler parallellt. Ett motstånd på 531 Ω som last, cirka 7,5 mA eller
180 mAh per dygn, i stället för en repeater med XIAO nRF52840 och Wio-SX1262 utan hård
strömsparning. Ljuset mättes av en väderstation på taket med en vågrät sensor som visar cirka
25–35 procent för lite, så de siffrorna visar vädrets form, inte absoluta värden.

**Omgång 1, en liten trädgårdslampspanel på 1,5 W (8 × 15 cm):**

| Förhållanden | Resultat |
|---|---|
| Natt, ingen sol | batteriet tappar cirka 180 mAh per dygn, mycket jämnt |
| Klar dag, 18 oktober | minst 760 mAh in, topp 208 mA, cirka 1 W |
| Soliga dagar, 28–29 oktober | cirka +280 till +300 mAh netto per dygn (450–480 mAh från panelen, cirka 2,5 dygns last) |
| Mest grå vecka, 22–27 oktober | panelen gav cirka 90 mAh per dygn, halva lasten |
| Mörkgrå dag, 1 november | panelen gav i stort sett ingenting |
| Nio dygn, 23 oktober–1 november | gick jämnt ut med ungefär en solig dag av tre eller fyra |
| Samma panel mot väster, med en kulle i öster | 3–6 mA mot upp till 208 mA mot söder, cirka 40 gånger mindre |

**Omgång 2, en större fyrkantig panel med svart ram,** okänd märkeffekt, uppskattad till cirka
15 W (från 4 november, samma laddare, celler och last):

| Förhållanden | Resultat |
|---|---|
| Veckan 5–11 november, i snitt ungefär hälften av ljuset den lilla panelen behövde för att gå jämnt ut | panelen täckte cirka 70–90 procent av lasten på 180 mAh per dygn |
| Mörka dagar, högsta ljus bara 35–60 W/m² | cirka 50–100 mAh per dygn, där den lilla panelen gav noll |
| Bra ljus | laddarens gräns på 500 mA, inte panelen, blev flaskhalsen |

Det testet visade:

- **Skörden är mycket olinjär.** Under en viss ljusnivå ger en linjär laddare ingenting alls,
  eftersom panelen inte orkar hålla spänningen över tröskeln. Den större panelen gjorde mörka
  dagar från noll till 50–100 mAh. Testarna tror att en laddare som arbetar vid lägre ljus (en
  MPPT-laddare som CN3791) också hjälper, men det prövades inte.
- **Ett fullt batteri ser ut som att det inte laddar:** laddaren drar ner strömmen nära 4,2 V och
  den gröna lysdioden tänds.
- **Billiga celler märkta "3000 mAh" gav ungefär hälften.**
- **Jämför bara spänningar uppmätta på morgonen,** efter natten och innan solen når panelen.
  Kvällsvärden efter laddning ligger 30–50 mV för högt.

Testarnas grova uppskattning utifrån mätningarna hittills: ett vinterunderskott från november
till mitten av februari på cirka 14 Ah vid 180 mAh per dygn för den lilla panelen, och cirka
5–8 Ah för den större panelen i samma fönster. Båda kan vara fel med en faktor två åt endera
hållet. De räknar med att den större panelen ger ungefär 30–50 procent mer utomhus utan glas,
men det är inte uppmätt.

## Vad siffrorna förutsätter

Tabellerna ovan gäller bara för det här bygget:

- **Panel:** Clas Ohlsons panel, urplockad så att bara solcellsarket används. Det inbyggda
  batteriet, laddkortet och skymningssensorn är borttagna. Verklig effekt i full sol är cirka
  10 W.
- **Radio:** Seeed XIAO nRF52840 med Wio-SX1262, strömförsörjd från batteriet bara via XIAO:ns
  BAT+ och BAT−.
- **Firmware:** EasySkyMesh, MeshCores strömsparande gren, repeaterbygget, med `powersaving on`
  och `set radio.rxps max`: cirka 4,5 mA i snitt. Officiell MeshCore med `powersaving on`: cirka
  7,1 mA.
- **Laddare:** justerbart CN3791-solladdarkort inställt på 5,6 V, med lysdiodernas motstånd
  borttagna, laddström högst 2 A.
- **Batteri:** litiumjon, 3,6–3,7 V, celler parallellt, med skyddskort, i en isolerad låda.
- **Montering:** lodrät, mot söder, underkanten över höjden där snön driver.
- **Inget annat på batteriet:** inga extra kort, inga statuslysdioder.

### Innan första vintern

1. Mät spänningen mellan panelens två utgångstrådar i sol, utan något anslutet. Räkna med cirka
   7 V. Visar den cirka 14 V är arket kopplat åt andra hållet, och laddaren ska då ställas på
   11,5 V i nästa steg. Vid alla andra värden: stanna och kontrollera att du har rätt trådar.
2. Ställ in laddaren med ett labbaggregat på 5,6 V (eller 11,5 V, se steg 1) tills kortets
   MPPT-stift visar 1,205 V. Kontrollera att laddströmmen är högst 2 A.
3. Ta bort laddarens lysdiodmotstånd. Koppla laddare → skyddskort → XIAO:ns batteriplattor.
4. Kontrollera att en provladdning slutar mellan 4,16 och 4,25 V och börjar igen av sig själv
   under 4,0 V.
5. Täck panelen och kontrollera att batteriet tappar mindre än 0,1 mA på natten.
6. Flasha firmwaren och slå på strömsparinställningarna.
7. Kör batteriet tomt, ställ panelen i sol och kontrollera att noden startar av sig själv.
8. Montera, och se till att batteriet är fulladdat i slutet av oktober.

Ett dygns strömlogg vid batteriet innan du köper celler är värd mer än vilken beräkning som
helst.

## Så togs siffrorna fram

En simulering timme för timme över de 18 vintrarna 2005–2023, med PVGIS satellitdata för
instrålning och temperatur vid 57,78° N, 14,16° Ö. Trädlinjen stänger ute den direkta solen och
en del av himlen. Modellen räknar med panelens sämre verkningsgrad i svagt ljus, laddarens egna
förluster och repeaterns förbrukning. Varje vinter ger det största underskott batteriet måste
överbrygga. Tabellerna använder den sämsta vintern på fem år och lägger till 20 procent.

En oberoende omskrivning av batterisimuleringen, gjord bara utifrån dess beskrivning, gav exakt
samma värden i båda batteritabellerna. En annan gav samma instrålning och temperatur per månad
på tre decimaler.

> [!NOTE]- Formeln för batteristorleken
> batteri (mAh) = underskott / (0,92 × 0,85 × 0,90) / (1 − 0,03 × dagar/30) × 1,20
>
> - 0,92: kapacitet kvar vid −20 °C vid så liten urladdning
> - 0,85: användbart fönster, 4,2 V ner till en gräns på 3,4 V
> - 0,90: åldrande, dimensionerat för tredje vintern
> - 3 %: självurladdning per månad under underskottsperioden
> - 1,20: marginal

Inte med i beräkningen: snö eller frost på panelen, och extra ljus som reflekteras från nysnö på
marken. De största osäkerheterna är firmwarens verkliga medelförbrukning, panelens effekt i mycket
svagt ljus och den verkliga trädlinjen.

**Källor:** PVGIS v5.3 (EU:s Joint Research Centre), SARAH3 timvis instrålning med
ERA5-temperatur, 2005–2023; SMHI:s stationsdata för Jönköping-Axamo och Växjö; strömmätningar av
MeshCore- och EasySkyMesh-byggen på XIAO nRF52840 med Wio-SX1262; CN3791-databladet;
modultemperaturer från FMI:s fältmätningar i Sodankylä och laminatdatablad; köldegenskaper för
celler från tillverkarnas datablad och publicerade tester; fälttestet i Jönköping oktober och
november 2026.

Har din solnod redan tystnat? Se [Solnoden dör på vintern](/felsokning/sol-dor-pa-vintern/).
