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

    console.log('data:', data);
    
    return (
        <React.Fragment>
            <div>Sống Với Thánh Kinh</div>
            <div>
                {loading && <p>Loading...</p>}
                {!loading && error && <p>{error}</p>}
                {!loading && !error && !data && <p>No data.</p>}
                {/* {!loading && !error && data && <p>{data?.message}</p>} */}
                {/* {data && <p>{data?.title}</p>}
                {data && <p>{data?.message}</p>}
                {!data && <p>No data.</p>} */}

                {!loading && !error && data && <p>{data?.title}</p>}

                {/* {data && data?.message.length} */}

                <p>
                    {!loading && !error && data && data?.message.slice(0, 1).map((d, index) => {
                        return (
                            <span key={index}>{d}</span>
                        );
                    })}
                </p>

                <p>
                    {!loading && !error && data && data?.message.slice(1, 3).map((d, index) => {
                        return (
                            <span key={index}>{d}</span>
                        );
                    })}
                </p>

                <p>
                    {!loading && !error && data && data?.message.slice(3, 5).map((d, index) => {
                        return (
                            <span key={index}>{d}</span>
                        );
                    })}
                </p>

                {!loading && !error && data && data?.message.slice(5, data && data?.message.length - 1).map((d, index) => {
                    return (
                        <p key={index}>{d}</p>
                    );
                })}

                {!loading && !error && data && data?.message.slice(data && data?.message.length - 1).map((d, index) => {
                    return (
                        <p key={index}>{d}</p>
                    );
                })}

            </div>
        </React.Fragment>
    );
}
export default Article;