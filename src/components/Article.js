import React, { useContext } from 'react';

import useAxios from './hooks/useAxios';

// import libraries
import AuthContext from './store/auth';

// CSS style


export const Article = () => {
    // console.log("Article rendering");
    const useCtx = useContext(AuthContext);

    const url = useCtx.svtk_bot;
    const { data, error, loading } = useAxios({url, 'data': useCtx.vpns});
        
    return (
        <React.Fragment>
            <div>Sống Với Thánh Kinh</div>
            <div>
                {loading && <p>Loading...</p>}
                {!loading && error && <p>{error}</p>}
                {!loading && !error && data && <p>{data?.title}</p>}
                {!loading && !error && data && <p>{data?.message}</p>}
                {!loading && !error && !data && <p>No data.</p>}
                {/* {data && <p>{data?.title}</p>}
                {data && <p>{data?.message}</p>}
                {!data && <p>No data.</p>} */}
            </div>
        </React.Fragment>
    );
}
export default Article;