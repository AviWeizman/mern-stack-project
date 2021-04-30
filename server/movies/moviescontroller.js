const express = require('express');

const moviesutils = require('../movies/moviesutils');

const approute = express.Router();



approute.route('/').get(async function(req,resp)
{
    let movies = await moviesutils.getallmovies()
    return resp.json(movies);
})

approute.route(':/id').get(async function(req,resp)
{
    let movie = await moviesutils.getamovie(id)
    return resp.json(movie)
})

approute.route(":/id").post(async function(req,resp)
{
    let newmovie = req.body;
    let addresult = await moviesutils.addmovie(id,newmovie)
    return resp.json(addresult)    
})

approute.route(':/id').put(async function(req,resp)
{
    let id = req.params.id
    let newmovie = req.body
    let putresult = await moviesutils.updatemovie(id,newmovie)
    return resp.json(putresult); 
})

approute.route(':/id').delete(async function(req,resp)
{
   let id = req.params.id;
   let deleteresault = await moviesutils.deletemovie(id)
   return resp.json(deleteresault)
})

module.exports = approute;