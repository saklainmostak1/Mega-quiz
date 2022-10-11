import React from 'react';
import './Subject.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import Toast from '../Toastify/Toast';


const Subject = ({quiz}) => { 
    // console.log(quiz.options) 
    // console.log(quiz.correctAnswer) 
    const {correctAnswer, question, options} = quiz;
    const correctAnsss = correctAnswer
        const correctAns = () =>{
            if(correctAns){
                    alert(correctAnsss)
                    
            }
        }
        const showCorrectAns =() =>{
            // console.log(topic)
         
            }
        
    return (  
       <div className="card text-center container m-5">
           <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title"> {question} </h5>
                     <p onClick={correctAns} className='bg-white border border-0'><EyeIcon className="h-6 w-6  w-25 h-25"/></p>
        </div>
        
             <div className='d-grid btn '>
                 <button onClick={()=>showCorrectAns (quiz)}  className="btn btn-info  p-4 m-2">{options[0]}</button>
                 <button onClick={() => showCorrectAns(quiz)} className="btn btn-info  p-4 m-2">{options[1]}</button>
                 <button onClick={showCorrectAns} className="btn btn-info  p-4 m-2">{options[2]}</button>
                <button onClick={showCorrectAns} className="btn btn-info  p-4 m-2">{options[3]}</button>
             </div>
             <Toast></Toast>
        </div>
    </div>

        
    );
};

export default Subject;