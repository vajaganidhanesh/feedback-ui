import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "This is feedback regarding 10",
    },
    {
      id: 2,
      rating: 9,
      text: "This is feedback regarding 9",
    },
    {
      id: 3,
      rating: 8,
      text: "This is feedback regarding 8",
    },
  ]);

  const [feedbackedit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

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
