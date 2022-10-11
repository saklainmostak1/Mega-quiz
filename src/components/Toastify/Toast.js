import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    // console.log(ans.data.questions)
    const notify = () => toast("correct ans");
    return (
        <div>
            <div className="d-grid gap-2">
                <button onClick={notify} className="btn btn-primary" type="button">{}</button>
        <ToastContainer />
      </div>
        </div>
    );
};

export default Toast;