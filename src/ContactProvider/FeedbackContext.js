import { v4 as uuidv4 } from "uuid";
import { createContext, useEffect, useState } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isloading,setIsloading] = useState(false);
  const [feedback, setFeedback] = useState([]);
  const [feedbackedit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(()=>{
    fetchFeedback()
  },[])

  const fetchFeedback = async ()=>{
    const response = await fetch(`/feedback?_sort=id&_order=asce`)
    const data = await response.json();
    setFeedback(data)
    setIsloading(false)
  }

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

  const editFeedback = (item) => {
    setFeedbackEdit({
      item: item,
      edit: true,
    });
  };

  const updateFeedback = (id, updItem) => {
    console.log(id, updItem);

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackedit,
        isloading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
