import React, { useState } from "react";
import Quiz from "./Quiz";

const all_questions = require("./data.json");

const App = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerFromChild, setAnswerFromChild] = useState("");

  //This gets data from child
  const sendDataToParent = (data) => {
    setAnswerFromChild(data);
    console.log(
      "==>>all_questions.questions[questionIndex].correctIndex",
      all_questions.questions[questionIndex].correctIndex
    );
    console.log("==>>data", data);
    if (
      data ===
      all_questions.questions[questionIndex].answers[
        all_questions.questions[questionIndex].correctIndex
      ]
    )
      setScore((score) => score + 1);
    console.log("==>>SCORE", score);
  };

  const setNext = () => {
    if (questionIndex < all_questions.questions.length - 1)
      setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const setPrev = () => {
    if (questionIndex > 0) setQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const question = all_questions.questions[questionIndex];

  return (
    <div>
      <div>
        <Quiz sendDataToParent={sendDataToParent} question={question} />
      </div>
      <button onClick={setPrev}>Previous</button>
      <button onClick={setNext}>Next</button>
      <button>Submit</button>
      <p>{answerFromChild}</p>
      <p>Total score: {score}</p>
    </div>
  );
};

export default App;
