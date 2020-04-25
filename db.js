const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = {
    db: (uri) => {
        const dbOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true
        }
        
        mongoose.connect(uri, dbOptions);

        mongoose.connection.on('connected', () => {
            console.log("Mongoose default connection is open");
        });
        
        mongoose.connection.on('error', (err) => {
            console.log("Mongoose default connection has occured "+err+" error");
        });
        
        mongoose.connection.on('disconnected', () => {
            console.log("Mongoose default connection is disconnected");
        });
        
        process.on('SIGINT', () => {
            mongoose.connection.close(function(){
                console.log(termination("Mongoose default connection is disconnected due to application termination"));
                process.exit(0)
            })})
        
    }
}