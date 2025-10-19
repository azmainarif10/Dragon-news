import {  useEffect, useState } from "react"

import { useParams } from "react-router"

     
  const useDetail = () => { 
   const[details,setDetails] = useState([])
    const {id} =useParams()
 
    useEffect(()=>{

   const datas = async() =>{
  
      const response = await fetch('/news.json')
    const data = await response.json()
      const filteredDetails = data.filter(select=>select.id == id)
  
       setDetails(filteredDetails)
   }


datas()
    }
   
    
    ,[id])
  
   return details;

}
export default useDetail