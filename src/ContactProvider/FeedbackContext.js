import {v4 as uuidv4} from 'uuid'
import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const addFeedback = (value) => {
    value.id = uuidv4();
    setFeedback([value, ...feedback]);
    console.log(value);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider value={{ feedback, deleteFeedback,addFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
