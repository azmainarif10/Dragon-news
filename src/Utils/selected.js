import { use, useEffect, useState } from "react"
import { AuthContext } from "../Pages/AuthContext"

     
  const useSelected = () => { 
   const {selectedCatagories} = use(AuthContext)
   const[selected,setSelected] = useState([])
  
    useEffect(()=>{
       let url ='';
        if(!selectedCatagories) {
            url = 'https://openapi.programming-hero.com/api/news/category/08'
        }else{
            url = `https://openapi.programming-hero.com/api/news/category/${selectedCatagories}`
        }

   const datas = async() =>{
  
      const response = await fetch(url)
    const data = await response.json()
       setSelected(data.data)
   }


datas()
    }
   
    
    ,[selectedCatagories])
  
   return selected;

}
export default useSelected