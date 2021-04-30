const mongoose = require('mongoose');

let appschema = mongoose.Schema;

let userschema = new appschema(
    {
        name : String,
        username : String,
        password : String,
    })

    export default mongoose.model('users',userschema)