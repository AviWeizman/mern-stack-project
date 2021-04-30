const mongoose = require('mongoose');

let appschema = mongoose.Schema;

let movieschema = new appschema(
    {
        name : String,
        premiered : String,
        genres : [String],
        image : String
    })

    export default mongoose.model('movies',movieschema)