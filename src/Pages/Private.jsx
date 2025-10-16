import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import { Navigate} from 'react-router';

const Private = ({children}) => {
      
    const {user} = use(AuthContext)
   
    if(user){
        return children
    }
    return  <Navigate to={'/login'}></Navigate>
};

export default Private;