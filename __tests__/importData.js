const { importJsonData } =require('../src/importData')
const Pokemon = require('../src/api/Pokemon/model')
const mongoose = require('mongoose')
let uri = `mongodb://127.0.0.1/import`
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
        row: 2,
        name: 'lorem',
        pokedex: 2,
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
    data = json['sheet1']
    try {
        await importJsonData(json, Pokemon) 
        let pokemon = await Pokemon.find({})
        expect(pokemon).toBeTruthy()
        done()
    } catch (error) {
        console.log(error)
        done(error)
    }

}, 30000);

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
