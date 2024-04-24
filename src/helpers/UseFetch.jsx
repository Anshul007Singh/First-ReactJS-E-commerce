'use client'
import { useEffect, useState } from "react";

const UseFetch = (url) => {
    
        const [data, setData] = useState([]);
      
        useEffect(() => {
          fetch(url)
            .then((res) => res.json())
                .then((data) => setData(data))
              .then((error) => {
                  console.log(error);
                })
        }, [url]);
      
        return data;
      }

export default UseFetch;