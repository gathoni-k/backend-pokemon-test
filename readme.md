###### A solution of the backend challenge at https://github.com/RedFoxTech/vaga-backend-teste

## Pokémon Go Challenge!

Your mission is to import data from Pokemon Go, which are in excel, and create an API using NodeJS so that we can consume this data in a practical, fast and automated way.

This API should follow the minimum of RESTful practices and contain listings, search, pagination and filters. Feel free to decide which filters are most interesting.

### Project Configuraion

In ./config/db.js file
```JavaScript
module.exports = {
    MONGOURI: 'mongodb+srv://<username>:<password>@cluster0-apgna.mongodb.net/test?retryWrites=true&w=majority',
}
```
In .env file
```JavaScript
PORT=portnumber
```
Install dependencies
```JavaScript
npm install
```

### Run Tests
```JavaScript
npm test
```
### Start Project
```JavaScript
npm run start
```

### How the API works

Convert PokemonGo.xlsx to json and import it to a mongodb
```JavaScript
GET /api/populate-database
```
Get pokemon
```JavaScript
GET /api/get/:id
```
id - mongodb ObjectId

Response
```JavaScript
{
    success: true,
    err: null,
    message: 'Pokemon retrieved',
    pokemon: {
        _id:"5ea398e0c4ee580ced9d9225"
        row: 1,
        name: 'lorem',
        pokedex: 7,
        imgName: 'lorem',
        generation: 'lorem',
        evolutionStage: 'lorem',
        evolved: 'lorem',
        familyId: 3,
        crossGen: 4,
        type1: 'lorem',
        type2: 'lorem',
        weather1: 5,
        weather2: 6,
        statTotal: 7,
        atk: 8,
        def: 9,
        sta: 9,
        legendary: 9,
        Acquirable: 9,
        spawns: 9,
        regional: 9,
        raidable: 9,
        hatchable: 9,
        shiny: 9,
        nest: 9,
        new: 9,
        notGettable: 9,
        futureEvolved: 9,
        forty: 9,
        thirtyNine: 9
    }
}
```

Create pokemon
```JavaScript
POST /api/create
```
Sample Payload
```JavaScript
{
    row: 1,
    name: 'lorem',
    pokedex: 7,
    imgName: 'lorem',
    generation: 'lorem',
    evolutionStage: 'lorem',
    evolved: 'lorem',
    familyId: 3,
    crossGen: 4,
    type1: 'lorem',
    type2: 'lorem',
    weather1: 5,
    weather2: 6,
    statTotal: 7,
    atk: 8,
    def: 9,
    sta: 9,
    legendary: 9,
    Acquirable: 9,
    spawns: 9,
    regional: 9,
    raidable: 9,
    hatchable: 9,
    shiny: 9,
    nest: 9,
    new: 9,
    notGettable: 9,
    futureEvolved: 9,
    forty: 9,
    thirtyNine: 9
}
```
Sample response
```JavaScript
{
    success: true,
    err: null,
    message: 'Pokemon created',
    pokemon: pokemon: {
        _id:"5ea398e0c4ee580ced9d9225"
        row: 1,
        name: 'lorem',
        pokedex: 7,
        imgName: 'lorem',
        generation: 'lorem',
        evolutionStage: 'lorem',
        evolved: 'lorem',
        familyId: 3,
        crossGen: 4,
        type1: 'lorem',
        type2: 'lorem',
        weather1: 5,
        weather2: 6,
        statTotal: 7,
        atk: 8,
        def: 9,
        sta: 9,
        legendary: 9,
        Acquirable: 9,
        spawns: 9,
        regional: 9,
        raidable: 9,
        hatchable: 9,
        shiny: 9,
        nest: 9,
        new: 9,
        notGettable: 9,
        futureEvolved: 9,
        forty: 9,
        thirtyNine: 9
    }
}
```
Update pokemon
```JavaScript
GET /api/update/:id
```
id - mongodb ObjectId

Response
```JavaScript
{
    success: true,
    err: null,
    message: 'Pokemon updated',
    pokemon: {
        _id:"5ea398e0c4ee580ced9d9225"
        row: 1,
        name: 'lorem',
        pokedex: 7,
        imgName: 'lorem',
        generation: 'lorem',
        evolutionStage: 'lorem',
        evolved: 'lorem',
        familyId: 3,
        crossGen: 4,
        type1: 'lorem',
        type2: 'lorem',
        weather1: 5,
        weather2: 6,
        statTotal: 7,
        atk: 8,
        def: 9,
        sta: 9,
        legendary: 9,
        Acquirable: 9,
        spawns: 9,
        regional: 9,
        raidable: 9,
        hatchable: 9,
        shiny: 9,
        nest: 9,
        new: 9,
        notGettable: 9,
        futureEvolved: 9,
        forty: 9,
        thirtyNine: 9
    }
}
```
Delete pokemon
```JavaScript
GET /api/get/:id
```
id - mongodb ObjectId

Response
```JavaScript
{
    success: true,
    err: null,
    message: 'Pokemon deleted',  
}
```
Retrieve pokemons by page
Get pokemon
```JavaScript
GET /api/get/page/:page
```
page - Number
Response
```JavaScript
{
    success: true,
    err: null,
    message: 'Pokemon retrieved',
    pokemon: {[object], [object], [object], [object], [object], [object], [object],[object], [object],[object]}
}
```
