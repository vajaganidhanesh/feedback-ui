import { motion, AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import Spinner from "./shared/Spinner";
import Card from "./shared/Card";
import FeedbackContext from "../ContactProvider/FeedbackContext";

function FeedbackList({  handleDelete }) {
  
  const {feedback,isloading} = useContext(FeedbackContext)

  if (!isloading &&(!feedback || feedback.length === 0)) {
    return (
      <Card>
        <p>No Feedback Yet</p>
      </Card>
    );
  }

  return isloading ? <Spinner/>:
  (<div className="feedback-list">
  <AnimatePresence>
    {feedback.map((item)=>{
      return(
      <motion.div
       key={item.id}
              initial={{opacity:0}}
              animate={{opacity:1}}
              exit={{opacity:0}}
              >
           
              <FeedbackItem
                key={item.id}
                item={item}
                handleDelete={handleDelete}
              />
            
            </motion.div>  
        )}) }
  </AnimatePresence>
</div>)
  
  
}

// return (
  //   <div className="feedback-list">
  //     <AnimatePresence>
  //       {feedback.map((item, value) => {
  //         <motion.div key={item.id}
  //         initial={{opacity:0}}
  //         animate={{opacity:1}}
  //         exit={{opacity:0}}
  //         >
  //           return (
  //           <FeedbackItem
  //             key={item.id}
  //             item={item}
  //             handleDelete={handleDelete}
  //           />
  //           );
  //         </motion.div>;
  //       })}
  //     </AnimatePresence>
  //   </div>
  // );


// FeedbackItem.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// };

export default FeedbackList;
