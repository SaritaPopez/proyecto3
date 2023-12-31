## Instalar Server

- Crear una base de datos vacía en una instancia de MySQL local.

- Ir a la terminal de Visual Studio Code y acceder a la carpera mediante el comando `cd server`. 

- Instalar las dependencias mediante el comando `npm install` o `npm i`.

- Guardar el archivo `.env.example` como `.env` y cubrir los datos necesarios.

- Ejecutar `npm run initDB` para crear las tablas necesarias en la base de datos anteriormente creada.

- Ejecutar `npm run dev` para lanzar el servidor.

- Importar la colección de Postman para poder probar los endpoints.

## Base de datos

- User:

  - id
  - email
  - username
  - password
  - role ("admin", "normal")
  - createdAt

- Entries:

  - id
  - title
  - city
  - neightborhood
  - district
  - description
  - userId
  - resolved
  - createdAt
  - modifiedAt

- EntryPhotos:

  - id
  - userId
  - name
  - entryId
  - createdAt

- Likes:

  - id
  - userId
  - entryId
  - createdAt

### Endpoints Usuarios:

- POST [/users/register] - Registro de usuario.
- POST [/users/login] - Login de usuario (devuelve token).
- GET [/users] - Devuelve información del usuario del token. **TOKEN**

### Endpoints Entries:

- POST [/entries] - Crea una entrada (solo admin) **TOKEN**
- GET [/entries] - Retorna el listado de entradas.
- GET [/entries/:entryId] - Retorna una entrada en concreto.
- POST [/entries/:entryId/likes] - Dar like a una entrada. **TOKEN**
- DELETE [/entries/:entryId/likes] - Quitar like a una entrada. **TOKEN**
- POST [entries/:entryId/photos] - Agregar una foto a una entrada. **TOKEN**
- DELETE [/entries/:entryId/photos] - Borra una foto de una entrada. **TOKEN**
- PUT [/entries/:entryId/resolves] - Marca un problema de accesibilidad como resuelto.
