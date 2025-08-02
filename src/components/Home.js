import React from 'react';

// import libraries
import Article from './Article'
import Header from './Header';

// CSS style


const Home = () => {
    // console.log('Home rendering');
    return (
        <React.Fragment>
            <Header />
            <Article />
        </React.Fragment>
    );
}
export default Home;