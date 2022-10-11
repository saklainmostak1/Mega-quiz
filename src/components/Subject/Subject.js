import React from 'react';
import './Subject.css'

const Subject = ({quiz}) => {
    const {correctAnswer} = quiz
    
    const correctAns =() =>{
        if(correctAnswer ){

            alert('correct ans')
        }
    }
    return (
        <div className='container'>
            <p>{quiz.correctAnswer}</p>
          <div className='bg-light text-primary shadow-lg p-5'>
            <h5>Question: {quiz.question} </h5>
            <div className='d-flex justify-content-center'>
                <div>
                    <p><input  onClick={correctAns} type="radio"/> {quiz.options[0]}</p>
                    <p><input  onClick={correctAns} type="radio"/> {quiz.options[1]}</p>
                </div>
                <div className='px-5'>
                    <p><input  onClick={correctAns} type="radio"/> {quiz.options[2]}</p>
                    <p><input  onClick={correctAns} type="radio"/> {quiz.options[3]}</p>
                </div>
            </div> 

        </div>
        </div>
    );
};

export default Subject;