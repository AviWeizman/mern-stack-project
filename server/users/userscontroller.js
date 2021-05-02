const express = require('express');
const { use } = require('../movies/moviescontroller');
const {response} = reqiure('express'); 

const usersutils = require('../users/usersutils');

const approute = express.Router()

approute.route('/').get(async function(req,resp)
{
    let users = await usersutils.getallusers()
    return resp.json(users);
})

approute.route('/:id').get(async function(req,resp)
{
    let id = req.params.id;
    let user = await usersutils.getauser(id);
    return resp.json(user)
})

approute.route('/').post(async function(req,resp)
{
    let newuser = req.body;
    let result  = await usersutils.adduser(newuser);
    return resp.json(result);
})

approute.route('/:id').put(async function(req,resp)
{
    let id = req.params.id;
    let newuser = req.body;
    let result = await usersutils.updateuser(id,newuser);
    return resp.json(result);
})

approute.route('/:id').delete(async function(req,resp)
{
    let id = req.params.id;
    let result = await usersutils.deleteuser(id);
    return resp.json(result)

})

module.exports = approute;
