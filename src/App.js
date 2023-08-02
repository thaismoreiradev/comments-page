import React from "react";
import "./App.css";
import { TbMessageHeart } from "react-icons/tb";

function App() {
  const [currentComment, setCurrentComment] = React.useState("");
  const [allComments, setAllComments] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [feedbackStatus, setFeedbackStatus] = React.useState();

  const handleButton = () => {
    if (currentComment.length === 0) {
      setMessage("You need to write something first");
      setFeedbackStatus(false);
    } else {
      const commentsArray = [...allComments, `"${currentComment}"`];
      setFeedbackStatus(true);
      setMessage("We have received your message, thank you!");
      setAllComments(commentsArray);
      setCurrentComment("");
    }
  };

  return (
    <div className="container">
      <header>
        <TbMessageHeart className="icon" />
        <h1>Send your feedback</h1>
        <div className="form">
          <textarea
            onChange={(e) => setCurrentComment(e.target.value)}
            value={currentComment}
            placeholder="Please enter your opinion here ..."
          ></textarea>
          <button onClick={handleButton}>send</button>
          <p
            style={
              feedbackStatus === false
                ? { color: "tomato" }
                : { color: "olivedrab" }
            }
          >
            {message}
          </p>
        </div>
      </header>

      <ul>
        {allComments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
