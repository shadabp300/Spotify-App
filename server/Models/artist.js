const mongoose=require('mongoose')

const artistSchema=new mongoose.Schema({
    artist_name:String,
    birth_date:String,
    bio:String
})

const artistmodel= mongoose.model("artist", artistSchema)

module.exports=artistmodel