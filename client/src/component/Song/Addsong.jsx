import axios from 'axios'
import React, { useState } from 'react'
import FileBase64 from 'react-file-base64'
import { useNavigate, NavLink } from 'react-router-dom'
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
            <h4 className='song_heading'>Song Name</h4>
            <input className='add_artist_input' type="text" 
            onChange={(e)=>setdata({...data,song_name:e.target.value})}/>

            <h4>Date Of Released</h4>
            <input className='add_artist_input date' type="date"
            onChange={(e)=>setdata({...data,date:e.target.value})}/>

            <h4>Artwork</h4>
            <FileBase64  type="file" multiple={ false } onDone={({base64})=> {
            setdata({...data,artwork:base64})
            }}/>

            <h4>Artists</h4>
            <input className='add_artist_input' type="text"
            onChange={(e)=>setdata({...data,artist:e.target.value})}/>
            <div>
            <NavLink to='/song'><button className='add_artist_cancel' >cancel</button></NavLink>
            <button className='song_button add_artist_submit' onClick={submit_artist}>Done</button>
            </div>
            
        </div>

        
    </div>
    </div>
  )
}

export default Add_song