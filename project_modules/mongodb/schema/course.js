exports = module.exports = function(app, mongoose) {
    var courseSchema = new mongoose.Schema({
        name: { type: String, default: '' }
    });

    app.db.model('Course', courseSchema);
}