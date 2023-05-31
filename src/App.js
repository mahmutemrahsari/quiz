import { useState } from "react";
import Quiz from "./Quiz";

const all_questions = require("./data.json");

const App = () => {
  const [question, setQuestion] = useState(all_questions.questions[0]);
  const [increment, setIncrement] = useState(0);

  const setNext = () => {
    if (increment < all_questions.questions.length - 1)
      setIncrement(increment + 1);
    console.log(all_questions.questions[increment]);
    return setQuestion(all_questions.questions[increment]);
  };

  const setPrev = () => {
    if (increment > 0) setIncrement(increment - 1);
    console.log(all_questions.questions[increment]);
    return setQuestion(all_questions.questions[increment]);
  };

  return (
    <div>
      <div>
        <Quiz question={question} />
      </div>
      <button onClick={() => setPrev()}>Previous</button>
      <button onClick={() => setNext()}>Next</button>
      <button>Submit</button>
    </div>
  );
};

export default App;
