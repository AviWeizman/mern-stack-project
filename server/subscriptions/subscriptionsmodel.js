const mongoose = require('mongoose');


let appschema = mongoose.Schema;

let subscriptionsschema = new appschema(
    {
        member_id : String,
        movie_id : String,
        date : String
    })

    export default mongoose.model('subscriptions',subscriptionsschema);