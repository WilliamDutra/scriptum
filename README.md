# Scriptum

## Modo de usar

Modelo de arquvio json, com as descrições da sua api

```
[
  {
    "Nome": "Lista Usuarios",
    "Metodo": "GET",
    "Rota": "/usuario",
    "Descricao": "Lista todos os usuarios"
  }
]
```

## Incializar
``` 
var scriptum = require('@scriptum/scriptum')('name-your-folder-with-data-json')
```
