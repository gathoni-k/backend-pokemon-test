const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const { Schema } = mongoose

const PokemonSchema = new Schema({
    row: Number,
    name: String,
    pokedexNumber: Number,
    imgName: String,
    generation: String,
    evolutionStage: String,
    evolved: String,
    familyId: Number,
    crossGen: Number,
    type1: String,
    type2: String,
    weather1: String,
    weather2: String,
    statTotal: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number,
    Acquirable: Number,
    spawns: Number,
    regional: Number,
    raidable: Number,
    hatchable: Number,
    shiny: Number,
    nest: Number,
    new: Number,
    notGettable: Number,
    futureEvolved: Number,
    forty: Number,
    thirtyNine: Number
})

module.exports = mongoose.model('Pokemon', PokemonSchema)