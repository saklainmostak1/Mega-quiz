import React from 'react';
import './Subject.css'

const Subject = ({quiz}) => {
    const {} = quiz
    return (
        <div>
            <p>Fast: {quiz.question} </p>
            <p>  {quiz.options} </p>
            <p>{quiz.correctAnswer}</p>
        </div>
    );
};

export default Subject;