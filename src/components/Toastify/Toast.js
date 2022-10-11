import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const notify = () => toast("correct ans");
    return (
        <div>
            <div class="d-grid gap-2">
                <button onClick={notify} class="btn btn-primary" type="button"></button>
        <ToastContainer />
      </div>
        </div>
    );
};

export default Toast;