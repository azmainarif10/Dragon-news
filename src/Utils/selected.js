import { use, useEffect, useState } from "react"
import { AuthContext } from "../Pages/AuthContext"

     
  const useSelected = () => { 
   const {selectedCatagories} = use(AuthContext)
   const[selected,setSelected] = useState([])
  
    useEffect(()=>{
       
   const datas = async() =>{
  
      const response = await fetch('/news.json')
    const data = await response.json()
       setSelected(data)
   }


datas()
    }
   
    
    ,[selectedCatagories])
  
   return selected;

}
export default useSelected