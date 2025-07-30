import { useEffect, useState, } from "react";
import axios from 'axios';

export const useFetch = (options) => {

    // console.log(options)
    const [ data, setData ] = useState();

    // useEffect (() => {
    //     console.log('useFetch useEffect');

    //     if(options.url) {
    //         let isCancelled = false;
            
    //         axios.get(options.url)
    //         .then(
    //             (response) => {
    //                 if (!isCancelled) {
    //                     console.log(response);
    //                     setData(response.data);
    //                 }
    //             }
    //         )
    //         .catch(
    //             (error) => {
    //                 console.log('ERROR! ' + error);
    //             }
    //         );
    //         return () => {
    //             isCancelled = true;
    //         }

    //     }

    // }, [options.url]);

    // return {
    //     data,
    // }

    useEffect(() => {
        // let isCancelled = false;
        // const fetchData = async () => {
        //     if(options.url) {
                
        //         // axios.get(options.url)
        //         // .then(
        //         //     (response) => {
        //         //         // if (!isCancelled) {
        //         //             console.log(response);
        //         //             setData(response.data);
        //         //         // }
        //         //     }
        //         // )
        //         // .catch(
        //         //     (error) => {
        //         //         console.log('ERROR! ' + error);
        //         //     }
        //         // );

        //         const res = await axios.get(options.url);
        //         console.log(res);
        //     }
        // }
        
        // fetchData();
        
        //useEffect cleanup function
        // return () => {
            // isCancelled = true;
        // }

        const fetchData = async () => {
            try {
                const res = await axios.get(options.url);
                console.log(res);
                setData(res.data);
            }
            catch (error) {
                console.log('ERROR! ' + error);
            }
        };

        fetchData();
        
    }, [options.url]);

    return {data, };
}
