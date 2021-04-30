const subscription = require('../subscriptions/subscriptionsmodel');

exports.getallsubs = function()
{
    return new Promise((resolve,reject)=>
    {
        subscription.find({},function(err,data)
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

exports.getasub = function(id)
{
    return new Promise((resolve,reject)=>
    {
        subscription.findById(id,function(err,data)
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


exports.addsub = function(newsub)
{
    return new Promise((resolve,reject)=>
    {
       let toaddsub = new subscription(
           {
               member_id : newsub.member_id,
               movie_id : newsub.movie_id,
               date : newsub.date
           })
           toaddsub.save(function(err)
           {
               if(err)
               {
                   reject(err)
               }
               else
               {
                   resolve('created!')
               }
           })
    })
}



exports.updatesub = function(id,updatedata)
{
    return new Promise((resolve,reject)=>
    {
       subscription.findByIdAndUpdate(id,
        {
            member_id : updatedata.member_id,
            movie_id : updatedata.movie_id,
            date : updatedata.date
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


exports.deletesub = function(id)
{
    return new Promise((resolve,reject)=>
    {
        subscription.findByIdAndDelete(id,function(err)
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