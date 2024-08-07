// FETCH 2/2 : Fetching

import { useState, useEffect } from "react";
import { makeRequest } from "../components/makeRequest";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await makeRequest.get(url);
      setData(res.data.data)

      } catch(err) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return {data, loading, error}
  
};

export default useFetch;