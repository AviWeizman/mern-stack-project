const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/moviesDB',
{
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : false
})