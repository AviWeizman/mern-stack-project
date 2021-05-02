const express = require('express');
const { put } = require('../movies/moviescontroller');
const {response} = reqiure('express'); 

const subscriptionsutils = require('../subscriptions/subscriptionsutils');

const approute = express.Router();

approute.route('/').get(async function(req,resp)
{
    let subs = await subscriptionsutils.getallsubs()
    return resp.json(subs)
})

approute.route('/:id').get(async function(req,resp)
{
    let id = req.params.id
    let sub = await subscriptionsutils.getasub(id)
    return resp.json(sub)
})

approute.route('/').post(async function(req,resp)
{
    let newsub = req.body;
    let subpost = await subscriptionsutils.updatesub(newsub)
    return resp.json(subpost)
})

approute.route('/:id').put(async function(req,resp)
{
   let id = req.params.id;
   let newsub = req.body
   let putresult = await subscriptionsutils.addsub(id,newsub)
   return resp.json(putresult)
})

approute.route('/:id').delete(async function(req,resp)
{
    let id = req.params.id;
    let result = await subscriptionsutils.deletesub(id)
    return resp.json(result)
})

module.expors = approute;
