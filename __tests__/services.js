const { fileExists } = require('../src/services')
let testFile = '__tests__/testFiles.PokemonGo.xlsx'
test('should return true', () => {
    console.log(fileExists(testFile))
    expect(fileExists(testFile)).toBe(true)
});