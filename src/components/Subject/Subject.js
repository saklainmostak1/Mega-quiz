import React from 'react';
import Toast from '../Toast/Toast';
import './Subject.css'

const Subject = ({quiz}) => {
    const {correctAnswer, question, options} = quiz
    const correctAns = (options) =>{
        const correct = options.find(ops => ops.correctAns = options.correctAns )
        if(correct){
            alert('correct ans')
        }
   }
    let messege;
    if(options[0] === correctAnswer){
        messege = <p>correct ans</p>
    }
    else if(options[1] === correctAnswer){
        messege = <p>correct ans</p>
    }
    else if(options[2] === correctAnswer){
        messege = <p>correct ans</p>
    }
    else if(options[3] === correctAnswer){
        messege = <p>correct ans</p>
    }
    else{
        messege = <p>Wrong ans</p>
    }
   
    return (
        
        <div className='container p-3'>
                 {
                        messege
           }
          
            {/* <p>{correctAnswer}</p> */}
          <div className='bg-light rounded text-primary shadow-lg p-5'>
            <h5>Question: {question} </h5>
            <div className='d-flex justify-content-center p-5'>
                <div>
           
                    <p><input   onClick={() => correctAns(quiz)} type="radio"/> {options[0]}</p>
                    <p><input  onClick={() => correctAns(quiz)} type="radio"/> {options[1]}</p>
                </div>
                <div className='px-5'>
                    <p><input  onClick={() => correctAns(quiz)} type="radio"/> {options[2]}</p>
                    <p><input  onClick={() => correctAns(quiz)} type="radio"/> {options[3]}</p>
                   
                </div>
            </div> 
<Toast></Toast>
        </div>
        </div>
    );
};

export default Subject;