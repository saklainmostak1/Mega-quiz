import './Subject.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import Toast from '../Toastify/Toast';
import { toast } from 'react-toastify';

const Subject = ({quiz}) => { 
    // console.log(quiz.options) 
    const {correctAnswer, question, options} = quiz;
    // console.log(correctAnswer) 
    const correctAnsss = correctAnswer
        const correctAns = () =>{
            if(correctAns){
                    // alert(correctAnsss)
                    toast.success(correctAnsss,{
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 2000
                    })
                    
            }
        }
        const showCorrectAns = (options) =>{
            // console.log(quiz.correctAnswer)
            // console.log(quiz.options[1])
            // console.log(quiz.id)
            // console.log(quiz)
            // console.log(quiz.options[1])
            if(options === correctAnswer){
                toast.success('correct ans',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                });
            }
            else{
                toast.warning('wrong ans',{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 2000
                });
            }
        }
        
      
        
       
        
    return (  
        <div>
            <div className='container'>
             <Toast></Toast>

            </div>
       <div className="card shadow-lg text-center container m-5">
           <div className="card-body">
                <div className='d-flex justify-content-between'>
                    <h5 className="card-title"> {question} </h5>
                     <p onClick={correctAns} className='bg-white border border-0'><EyeIcon className="h-6 w-6  w-25 h-25"/></p>
        </div>
        
             <div className='d-grid btn '>
            
                 <button onClick={() => showCorrectAns(options[0])}  className="btn btn-info  p-4 m-2">{options[0]}</button>
                 <button onClick={ () => showCorrectAns(options[1]) } className="btn btn-info  p-4 m-2">{options[1]}</button>
                 <button onClick={ () => showCorrectAns(options[2])} className="btn btn-info  p-4 m-2">{options[2]}</button>
                <button onClick={() => showCorrectAns(options[3]) } className="btn btn-info  p-4 m-2">{options[3]}</button>
             </div>
            
        </div>
    </div>
    </div>

        
    );
};

export default Subject;