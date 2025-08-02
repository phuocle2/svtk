import React, { useContext } from 'react';

import useAxios from './hooks/useAxios';

// import libraries
import AuthContext from './store/auth';
import RefVpns from './RefVpns';

// CSS style
import './Article.css';

export const Article = () => {
    // console.log("Article rendering");
    const useCtx = useContext(AuthContext);

    const url = useCtx.svtk_bot;
    const { data, error, loading } = useAxios({url, 'data': useCtx.vpns});

    console.log('data:', data);
    
    return (
        <React.Fragment>
            <div className='Article'>
                <div><h1>Sống Với Thánh Kinh</h1></div>
                <RefVpns refUrl={useCtx.vpns} title={data && data?.title} articleHref={data && data?.articleHref} />
                <div id='content_card'>
                    {loading && <p>Loading...</p>}
                    {!loading && error && <p>{error}</p>}
                    {!loading && !error && !data && <p>No data.</p>}
                    {/* {!loading && !error && data && <p>{data?.message}</p>} */}
                    {/* {data && <p>{data?.title}</p>}
                    {data && <p>{data?.message}</p>}
                    {!data && <p>No data.</p>} */}
                    
                    {
                        !loading && !error && data &&
                            <p>
                                {/* <a href={data?.articleHref} target="_blank" rel="noopener noreferrer"> */}
                                    <h2>{data?.title}</h2>
                                {/* </a> */}
                            </p>
                    }

                    {/* {data && data?.message.length} */}

                    <p>
                        {!loading && !error && data && data?.message.slice(0, 1).map((d, index) => {
                            return (
                                <a href={data.bibleHref} target="_blank" rel="noopener noreferrer" key={index}>
                                    <span key={index}>{d}</span>
                                </a>
                            );
                        })}
                    </p>
                    {!loading && !error && data && <hr />}
                    <p>
                        {!loading && !error && data && data?.message.slice(1, 2).map((d, index) => {
                            return (
                                <span className='KeyVerse' key={index}>{d}</span>
                            );
                        })}

                        {!loading && !error && data && data?.message.slice(2, 3).map((d, index) => {
                            return (
                                <span key={index}>{d}</span>
                            );
                        })}
                    </p>
                    
                    <p>
                        {!loading && !error && data && data?.message.slice(3, 4).map((d, index) => {
                            return (
                                <span className='Reflection' key={index}>{d}</span>
                            );
                        })}

                        {!loading && !error && data && data?.message.slice(4, 5).map((d, index) => {
                            return (
                                <span key={index}>{d}</span>
                            );
                        })}
                    </p>
                    {!loading && !error && data && <hr />}
                    {!loading && !error && data && data?.message.slice(5, data && data?.message.length - 1).map((d, index) => {
                        return (
                            <p key={index}>{d}</p>
                        );
                    })}
                </div>

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