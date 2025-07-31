import React from 'react';

const AuthContext = React.createContext({
    version: '0.1.0',
    
    // greeting: 'http://localhost:5001/greeting',

    greeting: 'https://svtk.pspace.site/greeting',
    svtk_bot: 'https://svtk.pspace.site/svtk_bot',

    vpns: 'https://www.vpns.org/song-voi-thanh-kinh',

})
export default AuthContext;