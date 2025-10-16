import { use, useEffect, useState } from "react"
import { AuthContext } from "../Pages/AuthContext"

     
  const useDetail = () => { 
   const[details,setDetails] = useState([])
   const{readId} = use(AuthContext)

    useEffect(()=>{

   const datas = async() =>{
  
      const response = await fetch(`https://openapi.programming-hero.com/api/news/${readId}`)
    const data = await response.json()
       setDetails(data.data)
   }


datas()
    }
   
    
    ,[readId])
  
   return details;

}
export default useDetail