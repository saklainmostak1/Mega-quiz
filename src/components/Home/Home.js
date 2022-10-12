import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import images1 from './quizquiz1.jpg'

const Home = () => {
    const topics = useLoaderData();
           
    return (
          <div className='container bg-info'>
           <div className="mb-3 card  border-0">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={images1} className="img-fluid rounded-start" alt="..."/>
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