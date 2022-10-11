import React from 'react';

const Blog = () => {
    return (
        <div className='m-5'>
            <section className='container'>
                <div class="card">
  <h2 class="card-header">What is the purpose of react router???</h2>
  <div class="card-body">
    <h5 class="card-title text-decoration-underline"><strong>Purpose of react router:</strong></h5>
    <p class="card-text"> 
                    ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
   
        </div>
         </div>
         </section>
         <section className='container'>
            <div class="card m-5">
  <h2 class="card-header">How does context api works???</h2>
  <div class="card-body">
    <h5 class="card-title text-decoration-underline"><strong>Context api works:</strong></h5>
    <p class="card-text"> 
    The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
   
        </div>
         </div>
            </section>
            <section>
            <section className='container'>
            <div class="card m-5">
  <h2 class="card-header">what is Useref and how it works???</h2>
  <div class="card-body">
    <h5 class="card-title text-decoration-underline"><strong>Useref and how it works:</strong></h5>
    <p class="card-text"> 
    <h6 className='text-decoration-underline'>Useref:</h6>
    The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
    <h6 className='text-decoration-underline'> Useref works:</h6>
    useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.
    </p>
   
        </div>
         </div>
            </section>
            </section>
        </div>
    );
};

export default Blog;