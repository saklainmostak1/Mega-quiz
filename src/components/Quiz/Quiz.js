import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';

const Quiz = () => {
    const quizs = useLoaderData()
    console.log(quizs.data)
    return (
        <div>
            <h1>Quiz Of  {quizs.data.name} </h1>
           {
             quizs.data.questions.map(quiz => 
               <Subject
               key={quiz.id}
               quiz={quiz}
               ></Subject> )
           }

        </div>
    );
};

export default Quiz;