const Pokemon = require('./api/Pokemon/model')
module.exports ={
    importJsonData: async (jsonData, model) => {
        let data = jsonData['sheet1']
        // insert each object in db collection
        let message = 'data import unsuccessful'
        let err = null
        try {
            for(let el of data) {
                let pokemon =  new model(el)
                await pokemon.save()
                console.log('created')
            } 
            message= 'data import successful'
        } catch (error) {
            console.log(error)
        }
        return{err, message }
    }
}
