import React from 'react';
import { Link } from 'react-router-dom';

const TopicDetails = ({topic}) => {
    const {logo, name, id, total} = topic
    return (
        <div className='bg-info'>
            <div className='container '>
        <div className=" m-5  row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card shadow-lg p-3 ">
      <img src={logo} className="card-img-top bg-success" alt="..."/>
      <p>Total Qus: {total} </p>
      <div className="card-body  d-flex justify-content-between">
        <h5 className="card-title">{name}</h5>
        <Link to={`/quiz/${id}`} ><button className='btn btn-primary'>Start Practice</button></Link>
      </div>
    </div>
  </div>
</div>
       </div>
        </div>
    );
};

export default TopicDetails;