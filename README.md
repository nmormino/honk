# honk
A javascript based browser alert replacement

Honk requires jQuery and is released under the MIT license.

##Example
```javascript
honk.alert('Your alert message goes here');
```

```javascript
honk.confirm('Your confirm message goes here', function(){
  //confirms and alerts both support callbacks.
  //callbacks are executed on a positive response.
});
```

Honk can be translated by overriding the language variables via the setLang method.

```javascript
honk.setLang({entity: "ok":"Esta bien", "cancel":"Cancelar", "submit":"Enviar", "alert":"Alerta", "confirm":"Confirmar"});
```
