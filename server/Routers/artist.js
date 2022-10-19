const express=require('express')
const Artistmodel=require('../Models/artist')
const router=express.Router()

router.post('/add_artist', (req,res)=> {
    const {artist_name, birth_date, bio}=req.body

    if(!artist_name || !birth_date || !bio) {
        return res.status(400).send("Please provide all Required details")
    }
    else {
        Artistmodel.findOne({artist_name}).then((check)=> {
            if(check) {
                return res.status(400).send("Artist is already available in the List")
            }
            else {
                Artistmodel.create(req.body).then(()=> {
                    res.status(200).send("New Artist Added")
                }).catch((err)=> {
                    res.status(400).send(err)
                })
            }
        }).catch((err)=> {
            res.status(400).send({err})
        })
       
    }
    
})

router.get('/artist', (req,res)=> {
    Artistmodel.find().then((data)=> {
        let result=data.reverse()
        res.status(200).send(result)
    }).catch((err)=> {
        res.status(400).send(err)
    })
})


module.exports=router