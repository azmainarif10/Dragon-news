
import { Link, useNavigate } from 'react-router';
import { AuthContext } from './AuthContext';
import { use } from 'react';

const Login = () => {

  const {signUser} = use(AuthContext)
  const navigate = useNavigate()
  
  
    
  
       function handleSignUser(e){
          e.preventDefault()
     const email = e.target.email.value
     const password = e.target.password.value
        signUser(email,password)
        .then(result =>{
          console.log(result)
        })
        .catch(error =>{
          console.log(error)
        });
       }
     
   


    return (
        <>
             <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
     
    </div>
     
   
    <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <h1 className="text-5xl font-bold">Login now!</h1>
         <form  onSubmit={(e)=>handleSignUser(e)}>
               <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button onClick={()=>{navigate('/')}} className="btn btn-neutral mt-4">Login</button>
          <p>Don't have a account < span className='text-blue-600 underline'><Link to={'/register'}>Register Here</Link> </span></p>
        </fieldset>
         </form>
      </div>
    </div>
  </div>
  </div>
      
      
      </>
       
    );
};

export default Login;