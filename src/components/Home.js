import React from 'react';

// import libraries
import Article from './Article'

// CSS style


const Home = () => {
    console.log('Home rendering');
    return (
        <React.Fragment>
            <Article />
        </React.Fragment>
    );
}
export default Home;