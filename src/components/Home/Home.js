import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';


const Home = () => {
    const topics = useLoaderData();
    return (
          <div className='container'>
           <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src='' className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h1 className="card-title">Welcome To My Quiz Website</h1>
        <p className="card-text">We've got all the quizzes you love to binge! ... This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. QUIZ ...</p>
      </div>
    </div>
  </div>
</div>
          {
            topics.data.map(topic => <Topics
            key={topic.id}
            topic={topic}

            ></Topics>)
           }
          </div>
         
      
    );
};

export default Home;