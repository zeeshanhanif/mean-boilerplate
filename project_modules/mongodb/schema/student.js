exports = module.exports = function(app, mongoose) {
    var studentSchema = new mongoose.Schema({
        name: { type: String, default: '' },
        courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
    });

    app.db.model('Student', studentSchema);
}