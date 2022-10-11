import React, { useEffect, useState } from 'react';


const Statistics = () => {
    const [quiz, setQuiz] = useState([])
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/quiz')
        .then(Response => Response.json())
        .then(data => console.log(data))
    }, [])
    return (
        <div className=''>
        <h1>Chart</h1>
        </div>
    );
};

export default Statistics;