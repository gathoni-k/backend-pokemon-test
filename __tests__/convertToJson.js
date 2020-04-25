const convertToJson = require('../src/convertToJson')
let testfile = '__tests__/testFiles/PokemonGo.xlsx'
describe('convert excel file to json', () => {
    it('should return json', (done) => {
        expect(convertToJson(testfile).type).toBe('json')
        expect(typeof convertToJson(testfile).result).toBe('object')
        // expect(convertToJson(testfile).data).t
        done()
    });
})