const { importJsonData } =require('../src/importData')
const { MONGOURITEST } = require('../config/db')
const Pokemon = require('../src/api/Pokemon/model')
const mongoose = require('mongoose')
let uri = `mongodb://127.0.0.1/routes`
const request = require('supertest')
const app = require('../src/api/app')
let pokemon;
beforeAll(async () => {
    // connect to db
    try {
        await mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true})
        console.log('connected')
    } catch (error) {
       console.log(error) 
    }
}, 30000);
test('should import data', async (done) => {
    let json = {sheet1: [{
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
    },
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
    }]}
    try {
        for(let el of json['sheet1']) {
            let pokemon =  new Pokemon(el)
            await pokemon.save()
         } 
         pokemon = await Pokemon.find({})
         expect(pokemon).toBeTruthy()
         done()
    } catch (error) {
        console.log(error)
        done(error)
    }}, 30000);
describe('GET /api/get/:id', () => {

    it('should return a pokemon object', async (done) => {
        try {
           let id = pokemon[0]._id
            const res = await request(app).get(`/api/get/${id}`).set('Content-Type', 'application/json')            
            expect(res.body.pokemon).toBeTruthy();
            expect(res.body.success).toBe(true)
            done()
        } catch (error) {
            console.log(error)
            done(error)
        }
    }, 30000);

});
describe('POST api/create', () => {
  
    it('should create a new pokemon', async (done) => {
        try {
            const res = await request(app).post('/api/create').send(
                {
                row: 1,
                name: 'added',
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
            })
            expect(res.status).toBe(201)
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('Pokemon created')
            done()
        } catch (error) {
            console.log(error)
            done(error)
        }

    }, 30000);
});

describe('DELETE api/delete', () => {
    it('should delete pokemon', async (done) => {
        try {
            let id = pokemon[0]._id
            const res = await request(app).delete(`/api/delete/${id}`)
            expect(res.body.message).toBe('Pokemon deleted')
            done()
        } catch (error) {
            console.log(error)
            done(error)
        }
    });
});

describe('GET api/get/:page', () => {
    it('should get pokemons', async (done) => {
        try {
            let id = pokemon[0]._id
            const res = await request(app).get('/api/get/page/1').send({name: 'lorem'})
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('Pokemon retrieved')
            done()
        } catch (error) {
            console.log(error)
            done(error)
        }
    });
    
});

describe('POST api/update/:id', () => {
    it('should get pokemons', async (done) => {
        try {
            let id = pokemon[0]._id
            const res = await request(app).post(`/api/update/${id}`).set('Content-Type', 'application/json')
            expect(res.body.success).toBe(true)
            expect(res.body.message).toBe('Pokemon updated')
            done()
        } catch (error) {
            console.log(error)
            done(error)
        }
    });
    
});

async function removeAllCollections () {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
        const collection = mongoose.connection.collections[collectionName]
        await collection.deleteMany()
    }
}
afterAll(async (done) => {
    await removeAllCollections()
    done()
})
