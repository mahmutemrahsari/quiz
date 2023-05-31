import React, { useState } from "react";
import Quiz from "./Quiz";

const all_questions = require("./data.json");

const App = () => {
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answerFromChild, setAnswerFromChild] = useState("");

  const [userAnswers, setUserAnswers] = useState(
    new Array(all_questions.questions.length).fill("")
  );

  console.log("===>>userAnswers", userAnswers);

  console.log(
    "===>>all_questions.questions.length - 1",
    all_questions.questions.length - 1
  );
  //This gets data from child
  const sendDataToParent = (data) => {
    setAnswerFromChild(data);
    //This array is being updated
    setUserAnswers((userAnswers) => ({
      ...userAnswers,
      [questionIndex]: data,
    }));
    console.log(
      "==>>all_questions.questions[questionIndex].correctIndex",
      all_questions.questions[questionIndex].correctIndex
    );
    console.log("==>>data", data);
  };

  const setNext = () => {
    if (questionIndex < all_questions.questions.length - 1)
      setQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const setPrev = () => {
    if (questionIndex > 0) setQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const question = all_questions.questions[questionIndex];

  const setSubmit = () => {
    // Calculate the total score by using user answers array
    let scorex = 0;
    for (let i = 0; i < all_questions.questions.length; i++) {
      if (
        userAnswers[i] ===
        all_questions.questions[i].answers[
          all_questions.questions[i].correctIndex
        ]
      )
        scorex++;
    }
    setScore(scorex);
  };

  return (
    <div>
      <div>
        <Quiz sendDataToParent={sendDataToParent} question={question} />
      </div>
      <button onClick={setPrev}>Previous</button>
      <button onClick={setNext}>Next</button>
      <button onClick={setSubmit}>Submit</button>
      <p>{answerFromChild}</p>
      <p>Total score: {score}</p>
    </div>
  );
};

export default App;
