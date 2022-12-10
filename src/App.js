import React, { useState } from 'react'
import Header from './Components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackList from './Components/FeedbackList'
function App() {
const [feedback,setFeedback] = useState(FeedbackData);

const deleteFeedback = (id)=>{
  console.log('App',id);
}
 
  return (
    < >
      <Header />
        <div className='container'>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
       </div>
    </>
  )
}

export default App
