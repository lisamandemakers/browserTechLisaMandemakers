# readme BT - Lisa Mandemakers
In deze README hou ik mijn progressie bij en en documenteer ik de informatie van de workshops die ik heb gevolgd tijdens de lessen.


##  Formulieren workshop
Gebruik firefox voor betere accessebility mogelijkheden
* Gebruik ook geen verschillende naam inputs anders kun je een heel groot deel van de wereld afsluiten


### Fieldsets
Je kunt met fieldsets en legends de formulieren groeperen en je kunt er mee valideren. Het zijn eigenlijk de "sections" van een formulier. 
* disabled 
* styling 


### Labels
* button in een label is weird
* 2 manier kun je een label aan een ionput koppelen:

Met Nesting
```
<label for="">
    Burgerservicenummer persoon
    <input type="text" name="" id="">
</label>
``` 

Met ID koppelen met for=""
```
<label for="text-bsn">Burgerservicenummer persoon</label>
<input type="text" name="" id="text-bsn">
```

### Input types
* Per browser verschilt het wat je in de type  `type="text"`
* Op een mobiel krijg je bijpassende toetsenborden
* veel input kun je niet stylen want verschilt 
* slider balkjes kun je wel helemaal stylen
* Select = dropdown 
    * 11a 
    * Er is een regel voor wnnr je meer dan 8 opties. Gebruik dan een drop-down
    * Je kunt dropdowns ook groeperen met `<optgroup label="Subobties">`
    * Kun je typen in een `<select>`?

### Output
* 12
* what is dat???

### Progress Bar
* je hebt een `<progress></progress>` en `<meter></meter>`


## Workshop CSS validatie

### Formulier Validatie
* `<form action="https:blabla.nl">` daar word de data van de form dan heen gestuurd

* required bij het input field toevoegen geeft al meer validatie wnnr je een type hebt
    * Je hebt ook een pattern, die precies kan aangeven wat wel en niet mag bijv met postcode. Het is requested request. Je kunt dit voor de gebruiker aangeven met bijv een placeholder. vervolgens kun je met het `title=""` element in het bericht laten zien.

* `:valid` & `:invalid`  is een property in css waarmee je dingen kunt stylen die dat zijn
    * input, form of field kunnen allemaal invalid zijn wanneer er een required item is
    * Je hebt ook de `:user-invalid`. Dit valideert het pas wanneer input daadwerkelijk is ingevuld. Let op: werkt op input!!

* :has gebruik je om dingen te laten zien

## Validation IPA
* constraint validation
* `<form novalidate>`
* `input.setCustomValidity`
* `input.reportValidity`
* mdn client-side form validation > check site

### Valideren in JS
```
let input = document.querySelector('input')
let input = document.querySelector('output')
output.value = input/checkvalidity() ? 'Valid' : 'Invalid'
```




## Random 


``` /* de p komt na het na komt toon je op deze manier  */
label:has(input:user-invalid) + p {} 

  ```
  <fieldset>
    <legend>1b. Blabla </legend>
    <label for=""><input type="radio" name="kinderen" value="n" id="">Nee. ga verder met vraag 1c</label>
    <label for=""><input type="radio" name="kinderen" value="n" id="">Ja</label>
 </fieldset>
```



## Herkansing
Voor mijn herkansing moest ik de volgende dingen aanpassen: 
* Kijk nog eens goed naar de HTML
* De conditionele elementen kan je beter omdraaien zodat het ook werkt als je browser :has niet begrijpt
* Voeg localStorage toe.
* Werk de verschillende onderdelen meer uit.

Per onderdeel ben ik aan de slag gegaan om alles mooi en netjes uit te werken en te verbeteren.

### HTML
Wat was er mis:
In de oorspronkelijke versie van mijn HTML-code waren de `<fieldset>` -elementen niet op de juiste manier gestructureerd. Alle vragen stonden binnen één `<fieldset>`, wat de leesbaarheid en de semantische structuur van de pagina niet ten goede kwam. Dit maakte het moeilijker om de vragen visueel van elkaar te onderscheiden en kon voor gebruikers die met screenreaders werken verwarrend zijn.

Wat ik heb aangepast:
Ik heb de `<fieldset>`-elementen opnieuw georganiseerd en per uitklapbare vraag genesteld. Dit maakt de HTML zowel visueel als semantisch duidelijker. Door elke vraag in zijn eigen `<fieldset>` te plaatsen, heb ik een logische indeling gecreëerd die de vragen duidelijker groeperen en makkelijker toegankelijk maken.


### :has omdraaien m.b.v. :not
Wat was er mis:
In mijn oorspronkelijke CSS gebruikte ik de `:has()`-selector om te bepalen wanneer bepaalde vragen of elementen moesten worden uitklapt. Hoewel `:has()` heel krachtig is, wordt het nog niet in alle browsers volledig ondersteund (bijvoorbeeld in Firefox). Omdat ik als standaardinstelling `display: none` gebruikte, betekende dit dat de elementen helemaal niet zichtbaar waren in browsers die `:has()` niet begrepen — ze bleven permanent verborgen, ook als de gebruiker het juiste antwoord selecteerde.

Wat ik heb aangepast:
Ik heb de logica omgedraaid door gebruik te maken van de `:not()`-selector in combinatie met `:has()`. In plaats van iets zichtbaar te maken op basis van een voorwaarde, verberg ik het element alleen wanneer die voorwaarde níet klopt. Dit zorgt ervoor dat de elementen standaard zichtbaar zijn, tenzij aan een specifieke voorwaarde wordt voldaan. Zo blijft de functionaliteit behouden, ook in browsers die `:has()` niet ondersteunen.

```css
 body:not(:has(input[value="ja-1b-a"]:checked)) .fieldset-1b-2 {
    visibility: hidden;
    opacity: 0;
    max-height: 0;
}
```

### Voeg localStorage toe.
Wat was er mis:
In mijn eerste versie had ik geen gebruik gemaakt van `localStorage`, simpelweg vanwege tijdsnood. Daardoor ging alle ingevoerde data verloren zodra de gebruiker de pagina ververste of afsloot. Dit was niet gebruiksvriendelijk, zeker bij langere formulieren of interactieve onderdelen waar de gebruiker mogelijk al veel had ingevuld.

Wat ik heb aangepast:
In de herkansing heb ik `localStorage` toegevoegd, zodat alle invoer van de gebruiker behouden blijft bij het verversen van de pagina. Dit betekent dat de ingevulde antwoorden automatisch worden opgeslagen en bij het opnieuw laden van de pagina weer worden ingeladen.


### Werk de verschillende onderdelen meer uit
Wat was er mis:
In mijn eerste versie had ik alleen één groepje met vragen: 1a, 1b, 1c en 1d. Dat was eigenlijk te weinig. Het liet wel zien hoe het werkte, maar er zat nog niet genoeg inhoud in. Ook werd het zo niet echt duidelijk hoe de website zou werken als er meer vragen of moeilijkere opdrachten bij zouden komen.

Wat ik heb aangepast:
Ik heb een extra set vragen toegevoegd over breuken en procenten (onderdeel 4d). Deze vragen maken de opdracht wat uitgebreider en laten zien dat ik ook met verschillende soorten opdrachten kan werken, niet alleen met de eerste vragen.

Omdat de website anders te lang zou worden, heb ik de vragen in een carousel gezet. Een carousel is een soort schuifmenu waar je met pijltjes (of knoppen) naar de volgende of vorige vraag kan gaan. Zo blijft de pagina overzichtelijk en hoef je niet alles tegelijk te zien.

#### Waarom dit beter is:

* Er zijn nu meer vragen, dus meer inhoud.

* De breuken en procenten zorgen voor wat moeilijkere opdrachten.

* De carousel maakt het netjes en makkelijk om door de vragen te bladeren.

* De pagina is niet te druk of lang, en je raakt minder snel het overzicht kwijt.
