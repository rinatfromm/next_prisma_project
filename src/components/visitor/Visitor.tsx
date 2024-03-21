"use client"

import {useEffect, useState} from "react";


export const Visitor = () => {
    const [count, setCount] = useState();


    useEffect(() => {
        const fetchCount = async () => {
            const response = await fetch('/api/visitor');
            const data = await response.json();
            setCount(data);
        };

        fetchCount();
    }, []);
    useEffect(() => {
        const incrementCount = async () => {
            await fetch('/api/increment', {method: 'POST'});
        };

        incrementCount();
    }, []);


    return (
        <div className="">
            {!count ? "Loading..." : <h1 className="text-red">Visit counter: {count}</h1>}
        </div>
    );
};