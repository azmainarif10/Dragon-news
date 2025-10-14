import { useEffect, useState } from "react"

     
  const useCatagories = () => { 
   const[categories,setCatagories] = useState([])

    useEffect(()=>{

   const datas = async() =>{
  
      const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
    const data = await response.json()
       setCatagories(data.data.news_category)
   }


datas()
    }
   
    
    ,[])
  
   return categories;

}
export default useCatagories