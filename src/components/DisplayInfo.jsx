import { useEffect, useState } from "react";
import React from 'react';

export default function DisplayInfo(){
    const [data, setData] = useState('');

    useEffect(()=>{
        fetch(
            "https://api.github.com/meta"
        , {
            headers:{
                'Content-Type': 'application/json'
            },
        })
        .then((res) => {
            return res.json();
        })
        .then((json) => setData(JSON.stringify(json)))
        .catch(error => console.error(error))
    },[])

    const log = (res) => {
        console.log(res);
    }

    return (
        <div>
            {data}
        </div>
    )
}