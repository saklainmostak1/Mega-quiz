import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Statistics = () => {
    const [quiz, setQuiz] = useState([])
    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            // console.log(data)
            const quizInfo = data.data.data
            console.log(quizInfo)
            const quizData = quizInfo.map(qus =>{
                const quiz = {
                    name: qus.name,
                    quantity: qus.total
                }
                return quiz
            } )
            // console.log(quizData)
            setQuiz(quizData)
        })

    }, [])
    return (
        <div>
            <div className="">
  <div className="card-body">
    <h1 className="card-text">Chart</h1>
    <BarChart  width={350} height={500} data={quiz}>
          <Bar dataKey="quantity" fill="#8884d8" />
          <XAxis dataKey="name"></XAxis>
          <YAxis/>
          <Tooltip></Tooltip>
        </BarChart>
  </div>
</div>
        
         </div>
    );
};

export default Statistics;