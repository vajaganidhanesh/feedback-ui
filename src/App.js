import {BrowserRouter as Router,Routes,Route} from'react-router-dom'
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import FeedbackForm from "./Components/FeedbackForm";
import About from './Components/About';
import AboutIconList from './Components/AboutIconList';
// import Card from './Components/shared/Card';
import Posts from './Components/Posts';
import { FeedbackProvider } from './ContactProvider/FeedbackContext';

function App() {

  // const addFeedback = (value)=>{
  //   value.id = uuidv4()
  //   setFeedback([value, ...feedback])
  //   console.log(value);
  // }
  
  // const deleteFeedback = (id) => {
  //   if (window.confirm("Are you sure you want to delete?")) {
  //     setFeedback(feedback.filter((item) => item.id !== id));
  //   }
  // };

  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' element={<>
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
          </>}/>
          <Route path='/about' element={<About/>} ></Route>
          <Route path='/post/*' element={<Posts/>}/>
        </Routes>
        {/* <Card>
        <NavLink to='/' activeClassName='active'>
            Home
        </NavLink>
        <NavLink to='/about' activeClassName='active'>
            About
        </NavLink>
      </Card> */}
      </div>

      

      <AboutIconList />
    </Router>
    </FeedbackProvider>
  );
}

export default App;
