const movie = require('../movies/moviemodel');
const {promise} = require('mongoose');
const express = require('express');

exports.getallmovies = function()
{
    return new Promise((resolve,reject)=>
    {
        movie.find({},function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}


exports.getamovie = function(id)
{
    return new Promise((resolve,reject)=>
    {
        movie.findById(id,function(err,data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}


exports.addmovie = function(data)
{
    return new Promise((resolve,reject)=>
    {
        let toaddmovie = new movie(
            {
                name : data.name,
                premiered : data.premiered,
                genres : data.genres,
                image : data.image
            })
            toaddmovie.save(function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('added')
                }
            })
    })
}


exports.updatemovie = function(id,updatedata)
{
    return new Promise((resolve,reject)=>
    {
        movie.findByIdAndUpdate(id,
            {
                name : updatedata.name,
                premiered : updatedata.premiered,
                genres : updatedata.genres,
                image : updatedata.image
            },function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('updeted')
                }
            })
    })
}


exports.deletemovie = function(id)
{
    return new Promise((resolve,reject)=>
    {
        movie.findByIdAndDelete(id,function(err)
        {
          if(err)
          {
              reject(err)
          }
          else
          {
              resolve('deleted')
          } 
        })
    })
}
