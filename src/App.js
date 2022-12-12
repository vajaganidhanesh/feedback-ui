import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router,Routes,Route,NavLink} from'react-router-dom'
import React, { useState } from "react";
import Header from "./Components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import About from './Components/About';
import AboutIconList from './Components/AboutIconList';
import Card from './Components/shared/Card';
import Posts from './Components/Posts';
import { FeedbackProvider } from './ContactProvider/FeedbackContext';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (value)=>{
    value.id = uuidv4()
    setFeedback([value, ...feedback])
    console.log(value);
  }
  
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<>
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats />
            <FeedbackList handleDelete={deleteFeedback}/>
          </>}/>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/post/*' element={<Posts/>}/>
        </Routes>
        <Card>
        <NavLink to='/' activeClassName='active'>
            Home
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
            About
        </NavLink>
      </Card>
      </div>

      

      <AboutIconList />
    </Router>
    </FeedbackProvider>
  );
}

export default App;
