---
title: "Kom igång med MeshCore i Jönköping"
seoTitle: "Kom igång i länet: guide"
description: "Kom igång med MeshCore i Jönköping: länets radioinställningar, kanaler och region se-jkp, var repeatrarna står och var nya behövs, steg för steg."
weight: 5
group: start
date: 2026-11-16
---

Den här sidan samlar det som gäller just i Jönköpings län: inställningarna, kanalerna, regionen
och var nätet behöver växa. Hur MeshCore fungerar i stort, och hur du gör varje steg, står i de
andra guiderna. Är du helt ny, börja med [Vad är MeshCore?](/guider/vad-ar-meshcore/).

## Nätet i länet just nu

Repeatrarna i och runt Jönköping bildar i dag ett eget nät. [Kartan på startsidan](/) visar dem,
vilka som hör varandra och trafiken mellan dem. Kartan bygger på vad observatörerna i länet hör,
och den kan också visa täckningen som MeshMapper har mätt upp.

Nätet är än så länge en ö. Det har ingen förbindelse med näten utanför, så ett meddelande härifrån
kommer inte längre än våra egna repeatrar. Just nu arbetar vi på två kopplingar: västerut mot
**Mullsjö** och norrut mot **Östergötland**.

## Radioinställningar

Alla radior i nätet måste ha samma radioinställningar för att höra varandra. I länet används
förinställningen nedan, som heter likadant i MeshCore-appen.

{{< settings >}}

## Kanaler och region

Länet använder regionen (scope) `se-jkp`. En kanal med regionen `se-jkp` förs bara vidare av
repeatrar som bär den, så samtalet stannar i länet och tar inte sändningstid från grannarna. Hur
det fungerar står i [Regioner](/guider/regioner/).

{{< channels >}}

Hashtag-kanaler lägger du till i appen med namnet, inklusive `#`. Testa bara i `#test-se-jkp`,
inte i chattkanalen: varje test kostar sändningstid för alla inom räckhåll. Mer om kanaler i
[Kanaler i MeshCore](/guider/kanaler/).

## Steg för steg

1. **Skaffa en radio.** Nästan vilket LoRa-kort som helst för 868 MHz fungerar som din egen radio,
   en *companion*. Modeller, priser och butiker står i
   [Skaffa hårdvara](/guider/skaffa-hardvara/).
2. **Flasha companion-firmware.** Det görs från webbläsaren, med MeshCore-projektets webbflasher:
   se [Flasha firmware](/guider/flasha-firmware/#companion).
3. **Ställ in radion i appen.** [Wizarden för companion](/wizard/companion/) visar länets värden i
   den ordning appen frågar efter dem, och [Kom igång med en companion](/guider/companion/)
   förklarar varje steg.
4. **Lägg till kanalerna** `#jonkoping` och `#test-se-jkp`, och välj regionen `se-jkp` för dem.
5. **Skicka en advert,** så att de andra ser din radio.
6. **Skriv `test` i `#test-se-jkp`.** Repeatrar med auto-svar svarar med en kort rapport om vem som
   hörde dig och hur starkt. Svaren kommer utspridda under ungefär två minuter, så vänta innan du
   skriver igen. Kommer inget svar, se
   [Ingen svarar på test i #test-se-jkp](/felsokning/ingen-svarar-i-test-se-jkp/). Vad svaren
   betyder står i [Första meddelandet](/guider/forsta-meddelandet/). Den allmänna `#test` går också bra
   för ett test, men där svarar inte auto-svaret.
7. **Säg hej** i `#jonkoping`, eller på JKPG-Meshs Discord (länk längst ner).

Hör du bara en repeater är det oftast helt normalt: den för vidare dina meddelanden till resten av
nätet. Se [Jag hör bara en repeater](/felsokning/bara-en-repeater/).

## Var nätet behöver repeatrar

Det som saknas är repeatrar på höga platser, framför allt längs vägen mot Mullsjö och
Östergötland. De här platserna skulle göra störst skillnad, och de finns också som stjärnor på
kartan:

- **Sjogarp:** en länk mellan Jönköping och Bankeryd, där vi i dag saknar en bra koppling.
- **Sibbabo:** platsen närmast Mullsjö där man fortfarande kan nå Jönköping, ett hopp på vägen
  dit.
- **Knaggebo:** den bästa länken ut från Mullsjö, via Knaggebobacken.
- **Gränna:** en stabil länk mot Hjo och Ödeshög, som vi i dag bara når under gynnsamma
  förhållanden.
- **Visingsö:** mitt i Vättern, för att länka ihop Västergötland, Östergötland, Närke och
  Jönköping.
- **Tabergs topp:** utsikt i tre väderstreck, som skulle täcka stora delar av norra Småland och
  länka ihop Tabergsdalen med resten av Jönköping.

Har du tillgång till ett tak, en mast eller en höjd med fri sikt, eller bor du bara högt med fin
utsikt, är det precis det som behövs. Du behöver inte sköta repeatern själv: du kan sätta upp en
egen, eller låta någon annan sätta en hos dig. Det gäller också föreningar och arbetsplatser.

- [Testa din plats](/wizard/nodvard/) visar vad som är bra med just din.
- [Bli nodvärd](/bli-nodvard/) beskriver vad det innebär att ha en repeater hos sig.
- [Sätt upp en MeshCore-repeater](/guider/repeater/) går igenom installationen, och
  [snabbkonfigurationen](/wizard/repeater-snabb/) skickar länets inställningar till radion via
  USB.

En repeater i länet heter `SE-JKP-` följt av en välkänd plats, till exempel `SE-JKP-Braneryd`. Mer
om namnen i [Namnge din repeater](/guider/namnge-noden/).

## Hjälp och gemenskap

De flesta som har satt upp repeatrar i länet finns på
[JKPG-Meshs Discord](https://discord.gg/9FmWyw8UG7). Där frågar du om hjälp, berättar var du tänker
sätta en repeater och får veta vad som händer i nätet. Nyheter och bakgrund finns på
[jkpg-mesh.se](https://jkpg-mesh.se/), och frågor som gäller hela Sverige tas på
[Sweden Mesh Discord](https://discord.gg/gchSzHkPGG). Korta svar på vanliga frågor finns under
[Frågor](/fragor/), och lösningar på vanliga problem under [Felsökning](/felsokning/).
