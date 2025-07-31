import { useEffect, useState } from "react";
import axios from 'axios';

const useAxios = (options) => {
    // console.log('useAxios options:', options);

    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {

        const fetchData = async () => {
            try {
                // console.log('useAxios fetching data...');
                const response = await axios.post(options.url, { 'url': options.data });
                // console.log(response);
                setData(response.data);
            } catch (err) {
                // console.log(err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
        
        if (loading) {
            // console.log('useAxios loading...');
            setData(null);
            setError(null);
        } else if (error) {
            // console.log('useAxios error:', error);
            setData(null);
            setLoading(false);
        }
    }, [options.url, options.data]);

    return { data, error, loading };
}

export default useAxios;
