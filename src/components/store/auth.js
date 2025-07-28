import React from 'react';

const AuthContext = React.createContext({
    version: '0.1.0',
    
    // greeting: 'http://localhost:5001/greeting',

    // greeting: 'https://server.pspace.site/greeting',
})
export default AuthContext;