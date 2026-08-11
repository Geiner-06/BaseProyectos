# userLists feature

## Intent

Permitir al usuario agregar nombres de usuario a una lista y eliminar los elementos individuales.

## In scope

- Título de la tarea.
- Etiqueta junto a un input para ingresar un nuevo nombre de usuario.
- Botón para agregar el nombre a la lista.
- Visualización de todos los usuarios agregados.
- Opción para eliminar cada usuario individualmente.

## Out of scope

- Persistencia en servidor o almacenamiento local.
- Validación avanzada más allá de nombre vacío.

## Requirements

- Mostrar un título claro.
- Mostrar un label visible junto al campo de entrada.
- Permitir agregar usuarios con el botón o con Enter.
- Mostrar la lista actual de usuarios.
- Cada usuario debe tener su propio botón "Eliminar".
- Mostrar un mensaje cuando no hay usuarios.

## Acceptance criteria

- [ ] El usuario puede escribir un nombre y agregarlo a la lista.
- [ ] Cada usuario aparece en la lista con un botón para eliminarlo.
- [ ] Al eliminar un usuario, desaparece inmediatamente de la lista.
- [ ] Si el campo está vacío, se muestra un mensaje de error.
