import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Utils/fireBase.init';

const AuthProvider = ({children}) => {
     
    const googleProvider = new GoogleAuthProvider();
    const gitProvider = new GithubAuthProvider();

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
   
    const [selectedCatagories,setSelectedCatagories] = useState(0)
   
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
    setUser(currentUser || null)
    setLoading(false)
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

const updateUser = (name,url) =>{
    return updateProfile(auth.currentUser,{
    displayName:name,
    photoURL:url,
    })
}
    return (
        <div>
            <AuthContext value={{setUser,updateUser,loading,selectedCatagories,setSelectedCatagories,createUser,signUser,user,logOut,googlePopUp,gitPopUp}} >
                {children}
            </AuthContext>
        </div>
    );
};

export default AuthProvider;