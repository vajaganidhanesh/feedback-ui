import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../ContactProvider/FeedbackContext'
import { useContext } from 'react'

function FeedbackItem({item}) {

 const {deleteFeedback} = useContext(FeedbackContext);
 
  return (
    <>
        <Card >
            <div className="num-display">
                {item.rating}
            </div>
            <button className="close" onClick={()=>{
             deleteFeedback(item.id) 
            }}>
              <FaTimes color='purple'></FaTimes>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    </>
  )
}

FeedbackItem.propTypes={
  item:PropTypes.object.isRequired,
}

export default FeedbackItem
