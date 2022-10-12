import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const notify = () => toast("Welcome To quiz click on the ans button please");
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