const mongoose = require('mongoose');

let appschema = mongoose.Schema;

let memberschema = new appschema(
    {
        name : String,
        email : String,
        city : String

    })

    export default mongoose.model('members', memberschema);