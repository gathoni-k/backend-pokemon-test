const Pokemon = require('./model')
module.exports = {
    getOne: async (req, res, next) => {
        let err = null
        let success = false
        let pokemon = null
        try {
            pokemon = await Pokemon.findById(req.params.id)
            if(!pokemon) {
                throw new Error('Pokemon not found')
            } 
            success = true
        } catch (error) {
            err = error
            console.log(error)
            next(error)
        }
        res.json({
            success,
            err,
            message: 'pokemon retrieved',
            pokemon})          
    },
    createOne: async (req, res, next) => {
        try {
            let pokemon = new Pokemon(req.body)
            await pokemon.save()
        } catch (error) {
            console.log(error)
           next(error) 
        }
        res.status(201).json({
            success: true,
            err: null,
            message: 'Pokemon created'
        })
    },
    deleteOne: async (req, res, next) => {
        try {
            Pokemon.findByIdAndDelete(req.params.id)
        } catch (error) {
            console.log(error)
            next(error)
        }
        res.status(200).json({
            success: true,
            err: null,
            message: 'Pokemon deleted'
        }) 
    },
    index: async (req, res, next) => {
        let page = req.params.page || 1
        let resPerPage = 10
        let pokemons = null
        try {
            
            pokemons = await Pokemon.find(req.body)
                                    .skip((resPerPage * page) -resPerPage)
                                    .limit(resPerPage)
            if(!pokemons) throw new Error('No data found')
        } catch (error) {
           console.log(error)
           next(error) 
        }
        res.status(200).json({
            success: true,
            err: null,
            message: "Pokemon retrieved",
            pokemon: pokemons
        })
    },
    update: async (req, res, next) => {
        let pokemon = null
        try {
            let found = await Pokemon.findById(req.params.id)
            if(!found) throw new Error('Pokemon not found')
            pokemon = await found.update(req.body)
        } catch (error) {
            console.log(error)
            next(error)
        }
        res.json({
            success: true,
            err: null,
            message: "Pokemon updated",
            pokemon: pokemon
        })
    },
    importData: async (req, res, next) => {
        
        try {
            let file = '../../../PokemonGo.xlsx'
            // convert data to json
            let jsonData = require('../../convertToJson')(file)
            // import to db
            await require('../../importData')(jsonData.result, Pokemon)
        } catch (error) {
            console.log(error)
            next(error)
        }
        res.json({
            success: true,
            message: 'data imported'
        })
    }
}
