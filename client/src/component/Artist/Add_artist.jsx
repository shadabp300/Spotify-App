import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import './Add_artist.css'

const Add_artist = () => {
    let navigate=useNavigate()

    const [data, setdata]=useState({
        artist_name:"",
        birth_date:"",
        bio:""
    })

    let submit_artist=(e)=> {
        e.preventDefault()
        console.log(data)
        axios({
            method:"POST",
            url:"http://localhost:8080/add_artist",
            data:data
        }).then((user)=> {
          window.alert(user.data)
          navigate('/artist')
        }).catch((err)=> {
            window.alert(err.response.data)
        })
    }
    return (
        <div>
            <Navbar/>
    <div className='add_artist_container'>
        <div className='add_artist_container_1'>
            <h2>Artist Name</h2>
            <input className='add_artist_input' type="text" 
            onChange={(e)=>setdata({...data,artist_name:e.target.value})}/>
            <h2>Date Of Birth</h2>
            <input className='add_artist_input' type="date"
            onChange={(e)=>setdata({...data,birth_date:e.target.value})}/>
            <h2>Bio</h2>
            <textarea className='add_artist_input' onChange={(e)=>setdata({...data,bio:e.target.value})}/>
            <button className='add_artist_submit' onClick={submit_artist}>Done</button>
        </div>

        
    </div>
    </div>
  )
}

export default Add_artist