import React, {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'

function Github() {
    const [data,setData]=useState({})
    const {username}=useParams()

    useEffect(()=>{
        fetch(`https://api.github.com/users/${username}`)
        .then((val)=>val.json())
        .then((val)=>setData(val))
    })
  return (
    <div>

        <h1>{data.name}</h1>
        <img src={data.avatar_url} alt="github image" />
        <div className='bg-gray-600 text-white'>Followers : {data.followers}</div>
    </div>
  )
}

export default Github