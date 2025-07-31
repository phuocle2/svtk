import React, { useState, useContext } from 'react';

// import { useFetch } from './useFetch';

import useAxios from './hooks/useAxios';
// import axios from './apis/axiosAPI';

// import libraries
import AuthContext from './store/auth';

// CSS style


export const Article = () => {
    // console.log("Article rendering");
    const useCtx = useContext(AuthContext);
    
    const [ url, setUrl ] = useState(useCtx.svtk_bot);
    // const [ data, setData ] = useState();
    
    const {data} = useAxios({url, 'data': useCtx.vpns});
    
    // console.log(data);

    // const [ data, error, loading ] = useAxios({
    //     axiosInstance: axios,
    //     method: 'POST',
    //     params: {'url': useCtx.vpns, data: ''},
    //     url: useCtx.svtk_bot,
    //     requestConfig: {
    //         headers: {
    //             'Content-Language': 'en-US',
    //         }
    //     }
    // })
    
    return (
        <React.Fragment>
            <div>Sống Với Thánh Kinh</div>
            <div>
                {/* {loading && <p>Loading...</p>} */}
                {/* {!loading && error && <p>{error}</p>}
                {!loading && !error && data && <p>{data?.title}</p>}
                {!loading && !error && data && <p>{data?.message}</p>}
                {!loading && !error && !data && <p>No data.</p>} */}
                {data && <p>{data?.title}</p>}
                {data && <p>{data?.message}</p>}
                {!data && <p>No data.</p>}
            </div>
        </React.Fragment>
    );
}
export default Article;