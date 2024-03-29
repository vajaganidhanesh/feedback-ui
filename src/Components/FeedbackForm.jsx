import React, { useContext, useEffect, useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../ContactProvider/FeedbackContext";

function FeedbackForm() {
    
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");   
  const [rating, setRating] = useState(10);
  const {addFeedback,feedbackedit,updateFeedback} = useContext(FeedbackContext);


  useEffect(()=>{
    if(feedbackedit.edit === true){
      setBtnDisabled(false);
      setText(feedbackedit.item.text);
      setRating(feedbackedit.item.rating)
    }
  },[feedbackedit])

  function handleTextChange(value) {

    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(value);

  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newFeedback = {
        text,
        rating,
    }

    if(feedbackedit.edit === true){
      updateFeedback(feedbackedit.item.id , newFeedback)
    }
    else{
      addFeedback(newFeedback);
    }

    setText('')
  }




  return (
    <Card>
      <form onSubmit={handleSubmit}>

        <h2>How would you rate your service with us?</h2>

        <RatingSelect
          select={(rating) => {
            setRating(rating);
          }}
        />

        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review here"
            name=""
            onChange={(e) => {
              handleTextChange(e.target.value);
            }}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
