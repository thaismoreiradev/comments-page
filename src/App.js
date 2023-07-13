import React from "react";
import "./App.css";
import { TbMessageHeart } from "react-icons/tb";

function App() {
  const [currentComment, setCurrentComment] = React.useState("");
  const [allComments, setAllComments] = React.useState([]);
  const [errorMessage, setErrorMessage] = React.useState("");

  // const getValue = (data) => {
  //   setCurrentComment(data.target.value)

  // }

  const handleButton = () => {
    if (currentComment.length === 0) {
      setErrorMessage("You need to write something first");
    } else {
      const commentsArray = [...allComments, currentComment];

      setAllComments(commentsArray);

      setCurrentComment("");

      setErrorMessage();
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
            placeholder="Enter your opinion here ..."
          ></textarea>
          <button onClick={handleButton}>SEND</button>
          <p>{errorMessage}</p>
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
