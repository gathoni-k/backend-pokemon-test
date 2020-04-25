const fs = require('mz/fs')
const path = require('path')
module.exports = {
    fileExists: (file) => {
        let exists = fs.exists(path.resolve(file))
        if(!exists) {
            return false
        }
        return true
    }
}