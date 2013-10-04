
var student = require('./student/student');

exports = module.exports = function(app) {
    // Show Index Page
    app.get('/', function(req, res){
        res.render('../public/index.html');
    });

    // More routes here
    app.get('/students',student.list);
}
