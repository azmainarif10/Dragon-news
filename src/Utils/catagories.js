import { useEffect, useState } from "react"

     
  const useCatagories = () => { 
   const[categories,setCatagories] = useState([])

    useEffect(()=>{

   const datas = async() =>{
  
      const response = await fetch('/catagories.json')
    const data = await response.json()
       setCatagories(data)
   }


datas()
    }
   
    
    ,[])
  
   return categories;

}
export default useCatagories