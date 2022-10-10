import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';


const Home = () => {
    const topics = useLoaderData();
    console.log(topics)
    return (
          <div>
           <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src='' class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h1 class="card-title">Welcome To My Quiz Website</h1>
        <p class="card-text">We've got all the quizzes you love to binge! ... This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply. QUIZ ...</p>
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