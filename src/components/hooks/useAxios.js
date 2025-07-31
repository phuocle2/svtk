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
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            // Cleanup if necessary
            setData(null);
            setError(null);
            setLoading(true);
        };
        
    }, [options.url, options.data]);

    return { data, error, loading };
}

export default useAxios;
