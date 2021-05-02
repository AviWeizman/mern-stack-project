const express = require('express');

const cors = require('cors');

const bodyparser = require('body-parser');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended : true}))
require('./configs/database');


const memberscontroller = require('./members/membercontroller');
const moviescontroller = require('./movies/moviescontroller');
const subscontroller = require('./subscriptions/subscriptionscontroller')
const userscontroller = require('./users/userscontroller');

app.use('/members',memberscontroller);
app.use('/movies',moviescontroller);
app.use('/subscriptions',subscontroller);
app.use('/users',userscontroller);

app.listen(8000);



