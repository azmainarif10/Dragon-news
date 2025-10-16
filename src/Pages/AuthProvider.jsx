import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Utils/fireBase.init';

const AuthProvider = ({children}) => {
     
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const [user,setUser] = useState(null)
   
    const [selectedCatagories,setSelectedCatagories] = useState(null)
    const [readId,setReadId] =useState(null)
    const createUser = (email,password)=>{
                
        return createUserWithEmailAndPassword(auth,email,password)


    }

    const signUser = (email,password)=>{
                
        return signInWithEmailAndPassword(auth,email,password)

    }

   useEffect(()=>{

  const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{

 if(currentUser){
    console.log(currentUser)
    setUser(currentUser)
 }else{
    setUser(null)
 }

  })
   
 

return () => unSubscribe()


   },[setUser])


 const logOut = ()=>{
    return signOut(auth)
  }
 
const googlePopUp = () =>{

    return signInWithPopup(auth,googleProvider)
}
const gitPopUp = () =>{

    return signInWithPopup(auth,gitProvider)
}



    return (
        <div>
            <AuthContext value={{readId,setReadId,selectedCatagories,setSelectedCatagories,createUser,signUser,user,logOut,googlePopUp,gitPopUp}} >
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;