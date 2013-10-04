
var mongoose = require('mongoose');

exports = module.exports = function(app) {

    //setup mongoose
    app.db = mongoose.createConnection(app.get('mongodbURL'));
    app.db.on('error', console.error.bind(console, 'mongoose connection error: '));
    app.db.once('open', function () {
        console.log('mongoose connection open');
    });


    require('./schema/student')(app, mongoose);
    require('./schema/course')(app, mongoose);

}
