const { Promise } = require('mongoose');
const member = require('../members/membermodel');


exports.getallmembers = function()
{
    return new Promise((resolve,reject)=>
    {
       member.find({},function(err,data)
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


exports.getamember = function(id)
{
    return new Promise((resolve,reject)=>
    {
        member.findbyid(id,function(err,data)
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


exports.addmember = function(data)
{
    return new Promise((resolve,reject)=>
    {
        let toadd = new member(
            {
                name : data.name,
                email : data.email,
                city : data.city
            })
            toadd.save(function(err)
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

exports.updatemember = function(id,updatedata)
{
    return new Promise((resolve,reject)=>
    {
        member.findByIdAndUpdate(id,
            {
                name : updatedata.name,
                email : updatedata.email,
                city : updatedata.city

            },function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('updated')
                }
            })
    })
}


exports.deletemember = function(id)
{
    return new Promise((resolve,reject)=>
    {
        member.findByIdAndDelete(id,function(err)
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