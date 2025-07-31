// import { useEffect, useState, } from "react";
// import axios from 'axios';

// const useAxios = (configObj) => {
    // const {
    //     axiosInstance,
    //     method,
    //     params = {},
    //     url,
    //     requestConfig = {}
    // } = configObj;
    
    // const [response, setResponse] = useState([]);
    // const [error, setError] = useState('');
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const controller = new AbortController();

    //     const fetchData = async () => {
    //         try {
    //             console.log('useAxios fetching data...');

    //             const res = await axiosInstance[method.toLowerCase()](url, {
    //                 ...params,
    //                 requestConfig,
    //                 signal: controller.signal
    //             });
    //             console.log(res);
    //             setResponse(res.data);
    //         } catch (err) {
    //             console.log(err);
    //             setError(err.message);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }

    //     fetchData();

    //     // useEffect cleanup function
    //     return () => controller.abort();
    // }, [axiosInstance,
    //     method,
    //     params,
    //     url,
    //     requestConfig]);

    // return [response, error, loading];
// }

// export default useAxios;

import { useEffect, useState } from "react";
import axios from 'axios';

const useAxios = (options) => {

    // console.log('useAxios options:', options);

    const [data, setData] = useState(null);

    useEffect(() => {
        // console.log('useAxios useEffect');

        if(options.url) {
            let isCancelled = false;
            
            axios.post(options.url, { 'url': options.data, })
            .then(
                (response) => {
                    if (!isCancelled) {
                        // console.log(response);
                        setData(response.data);
                    }
                }
            )
            .catch(
                (error) => {
                    console.log('ERROR! ' + error);
                }
            );
            return () => {
                isCancelled = true;
            }

        }

    }, [options.url, options.data]);

    return {data, };
}

export default useAxios;