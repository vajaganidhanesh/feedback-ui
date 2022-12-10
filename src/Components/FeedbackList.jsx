import React from 'react'
import FeedbackItem from './FeedbackItem';
import PropTypes  from 'prop-types';
import Card from './shared/Card';

function FeedbackList({feedback,handleDelete}) {
    console.log(feedback);
    if(!feedback || feedback.length === 0){
        return <Card><p>No Feedback Yet</p></Card>
    }
  return (
    <div className="feedback-list">
        {
            feedback.map((item,value)=>{
                return (
                  <FeedbackItem
                    key={item.id}
                    item={item}
                    handleDelete={handleDelete}
                  />
                );
            })
        }
    </div>
  )
}

FeedbackItem.propTypes={
    feedback:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            text:PropTypes.string.isRequired,
            rating:PropTypes.number.isRequired
        })
    )
}

export default FeedbackList
