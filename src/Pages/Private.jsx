import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate, useLocation} from 'react-router';
import Loading from './Loading';

const Private = ({children}) => {
      const location = useLocation()
    const {user,loading} = use(AuthContext)
    
    if(loading){
        return <Loading />
    }
 
    if(user){
        return children
    }
    return  <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Private;