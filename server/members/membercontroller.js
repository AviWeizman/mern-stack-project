const express = require('express');
const {response} = require('express');

const memberutils = require('../members/memberutils');

const approute = express.Router();


approute.route('/').get(async function(req,resp)
{
    let members = await memberutils.getallmembers();
    return resp.json(members);
})

approute.route('/:id').get(async function(req,resp)
{
    let id = req.params.id;
    let member = await memberutils.getamember(id);
    return resp.json(member)

})

approute.route('/:id').post(async function(req,resp)
{
    let newmember = req.body;
    let result = await memberutils.addmember(id,newmember);
    return resp.json(result);
})

approute.route('/:id').put(async function(req,resp)
{
    let id = req.params.id;
    let newmember = req.body;
    let result = await memberutils.updatemember(id,newmember);
    return resp.json(result);
})

approute.route('/:id').delete(async function(req,resp)
{
    let id = req.params.id;
    let result = await memberutils.deletemember(id)
    return resp.json(result);
})


module.exports = approute;
