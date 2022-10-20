import axios from 'axios'
import React, { useState } from 'react'
import FileBase64 from 'react-file-base64'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Addsong.css'


const Add_song = () => {
    let navigate=useNavigate()

    const [data, setdata]=useState({
        song_name:'',
        date:'',
        artwork:'',
        artist:''
    })





    let submit_artist=(e)=> {
        e.preventDefault()
        console.log(data)
        axios({
            method:"POST",
            url:"http://localhost:8080/addsong",
            data:data
        }).then((user)=> {
            window.alert(user.data)
            navigate('/song')
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }
    return (
        <div>
            <Navbar/>
    <div className='add_artist_container'>
        <div className='add_artist_container_1'>
            <h2 className='song_heading'>Song Name</h2>
            <input className='add_artist_input' type="text" 
            onChange={(e)=>setdata({...data,song_name:e.target.value})}/>

            <h2>Date Of Released</h2>
            <input className='add_artist_input' type="date"
            onChange={(e)=>setdata({...data,date:e.target.value})}/>

            <h2>Artwork</h2>
            <input type="file" title=' ' onChange={(e) => { handleFile(e) }} />

            <h2>Artists</h2>
            <input className='add_artist_input' type="text"
            onChange={(e)=>setdata({...data,artist:e.target.value})}/>
            
            <button className='song_button add_artist_submit' onClick={submit_artist}>Done</button>
        </div>

        
    </div>
    </div>
  )
}

export default Add_song