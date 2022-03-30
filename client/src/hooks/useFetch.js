import { useState, useEffect } from "react";

/**
 * 
 */
const useFetch = () => {
    const [data, setData] = useState(null);
    const fetchData = async (url) => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.log(error);
        }
    }
    return {
        fetchData,
        data
    };
};

export default useFetch;