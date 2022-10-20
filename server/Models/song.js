const mongoose=require('mongoose')

const songSchema=new mongoose.Schema({
    song_name:String,
    date:String,
    artwork:String,
    artist:String
})

const songModel=mongoose.model("songs", songSchema)

module.exports=songModel