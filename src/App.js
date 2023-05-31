import React, { useState } from "react";
import Quiz from "./Quiz";

const all_questions = require("./data.json");

const App = () => {
  const [questionIndex, setQuestionIndex] = useState(0);

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
        <Quiz question={question} />
      </div>
      <button onClick={setPrev}>Previous</button>
      <button onClick={setNext}>Next</button>
      <button>Submit</button>
    </div>
  );
};

export default App;
