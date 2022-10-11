import React from 'react';
import './Subject.css'
import { EyeIcon } from '@heroicons/react/24/solid'


const Subject = ({quiz}) => {
     
    const {correctAnswer, question, options} = quiz
    const correctAnsss = correctAnswer
        const correctAns = () =>{
            if(correctAns){
                    alert(correctAnsss)
            }
        }
    return (
        <div className='container p-3'>
            
          <div className='bg-light rounded text-primary shadow-lg p-5'>
            <div className='d-flex '>
            <h5>Question: {question} </h5>
            <button onClick={correctAns} className='bg-light border border-0'><EyeIcon className="h-6 w-6  w-25 h-25"/></button>
            </div>
           
            <div className='btn d-flex justify-content-center'>
                <div className=''>
                    <p><button className='btn btn-primary text-dark'  >{options[0]}</button></p>
                    <p><button  className='btn btn-primary text-dark'>{options[1]}</button></p>
                </div>
                <div className='px-5'>
                <p><button  className='btn btn-primary text-dark' >{options[2]}</button></p>
                <p><button  className='btn btn-primary text-dark'>{options[3]}</button></p>
               
              
                </div>
            </div> 

        </div>
        </div>
    );
};

export default Subject;