const user = require('../users/usermodel');

exports.getallusers = function()
{
    return new Promise((resolve,reject)=>
    {
        user.find({},function(err,data)
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


exports.getauser = function()
{
    return new Promise((resolve,reject)=>
    {
        user.findById(id,function(err,data)
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


exports.adduser = function(newuser)
{
    return new Promise((resolve,reject)=>
    {
        let toadduser = new user(
            {
                name : newuser.name,
                username : newuser.username,
                password : newuser.password
            })
            toadduser.save(function()
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve('created')
                }
            })
    })
}

exports.updateuser = function(id,updatedata)
{
    return new Promise((resolve,reject)=>
    {
        user.findByIdAndUpdate(id,
            {
                name : updatedata.name,
                username : updatedata.username,
                password : updatedata.password
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


exports.deleteuser = function()
{
    return new Promise((resolve,reject)=>
    {
        user.findByIdAndDelete(id,function(err)
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