import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            
            <Outlet />
        </div>
    );
};

export default Root;