const excelToJson = require('convert-excel-to-json')
const {fileExists} = require('./services')
const path = require('path')
let convertToJson = (file) => {
    // check if file exists
    let exists = fileExists(file)
    let data = {
        type: null,
        result: null
    }
    if (!exists) {
       return data 
    }
    const result = excelToJson({
        sourceFile: path.resolve(file),
            header: {
                rows: 1
            },
            columnToKey: {
                A: 'row',
                B: 'name',
                C: 'pokedexNumber',
                D: 'imgName',
                E: 'generation',
                F: 'evolutionStage',
                G: 'evolved',
                H: 'familyId',
                I: 'crossGen',
                J: 'type1',
                K: 'type2',
                L: 'weather1',
                M: 'weather2',
                N: 'statTotal',
                O: 'atk',
                p: 'def',
                Q: 'sta',
                R: 'legendary',
                S: 'aquireable',
                T: 'spawns',
                U: 'regional',
                V: 'raidable',
                W: 'hatchable',
                X: 'shiny',
                Y: 'nest',
                Z: 'new',
                AA: 'notGettable',
                AB: 'futureEvolved',
                AC: 'forty',
                AD:'thirtyNine'
            }
        
    })

    data.type = 'json'
    data.result = result
    return data
}
module.exports = convertToJson