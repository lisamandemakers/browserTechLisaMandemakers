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
label:has(input:user-invalid) + p {} ```



  ```
  <fieldset>
    <legend>1b. Blabla </legend>
    <label for=""><input type="radio" name="kinderen" value="n" id="">Nee. ga verder met vraag 1c</label>
    <label for=""><input type="radio" name="kinderen" value="n" id="">Ja</label>
 </fieldset>
```




