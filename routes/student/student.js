exports.list = function (req,res){

    console.log(req.app);

    // Get data from databasee
    /*
    req.app.db.models.Student.find(function (err,students){
        res.send(students);
    });
    */

    res.send(
        [
            {name:"First",age:23},
            {name:"Second",age:34},
            {name:"Third",age:12}
        ]
    );

}