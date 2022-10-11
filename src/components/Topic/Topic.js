import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicDetails from '../TopicDetails/TopicDetails';

const Topic = () => {
    const topics = useLoaderData()
    return (
        <div>
            
          {
            topics.data.map(topic => <TopicDetails
            
                key={topic.id}
            topic={topic}
            ></TopicDetails>
            

            )
           }
          </div>   
    );
};

export default Topic;