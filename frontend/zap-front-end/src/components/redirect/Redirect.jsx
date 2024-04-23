import React, {useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom';


const Redirect = () => {
    const {alias, urlstring} = useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        console.log(alias,urlstring)
        window.location.href="https://www.google.com"
    })
  return null
}

export default Redirect