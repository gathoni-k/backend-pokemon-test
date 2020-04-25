const app = require('./src/api/app')
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening at port ${PORT}`))
