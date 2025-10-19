
import { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useNavigate } from 'react-router';
import Navbar from '../Components/Navbar';
import { auth } from '../Utils/fireBase.init';

const Register = () => {

  const {createUser,updateUser,setUser} = use(AuthContext)


  const navigate = useNavigate()

     function handleCreatedUser(e){
        e.preventDefault()
   const email = e.target.email.value
   const password = e.target.password.value
   const name = e.target.name.value
   const url = e.target.url.value
      createUser(email,password)
      .then(result =>{
        console.log(result)
         updateUser(name,url)
         .then(result =>{
          console.log(result)
          setUser({...auth.currentUser})
         })
         .catch(error =>{
          console.log(error)
         })
        navigate('/')
      })
      .catch(error =>{
        console.log(error)
      });
     }




    return (
        <div>
          <Navbar />
           <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Register now!</h1>
        
               <form onSubmit={(e)=>handleCreatedUser(e)}>
               <fieldset className="fieldset">
                 <label className="label">Name</label>
          <input type="text" name='name' className="input" placeholder="Your Name" />
                 <label className="label">Photo URL</label>
          <input type="text"  name='url' className="input" placeholder="Photo URL" />
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password'  className="input" placeholder="Password" />
        
          <button  className="btn btn-neutral mt-4">Register</button>
         
        </fieldset>
         

         </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;