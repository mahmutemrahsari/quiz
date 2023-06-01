import { useState } from "react";

const Quiz = (props) => {
  const [answer, setAnswer] = useState(
    props.question.answers[props.question.correctIndex]
  );

  console.log("==>>PROPS", props);

  console.log(
    "==>props.question.answers[props.question.correctIndex]",
    props.question.answers[props.question.correctIndex]
  );

  const onOptionChange = (e) => {
    setAnswer(e.target.value);
    //We pass data to Parent
    props.sendDataToParent(e.target.value);
  };

  return (
    <div>
      {props.questionIndex + 1 + ") " + props.question.question}
      <p></p>
      <input
        type="radio"
        name={props.question}
        value={props.question.answers[0]}
        id={props.question.answers[0]}
        checked={answer === props.question.answers[0]}
        onChange={onOptionChange}
      />
      <label htmlFor={props.question.answers[0]}>
        {"A) " + props.question.answers[0]}
      </label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question.answers[1]}
        id={props.question.answers[1]}
        checked={answer === props.question.answers[1]}
        onChange={onOptionChange}
      />
      <label htmlFor={props.question.answers[1]}>
        {"B) " + props.question.answers[1]}
      </label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question.answers[2]}
        id={props.question.answers[2]}
        checked={answer === props.question.answers[2]}
        onChange={onOptionChange}
      />
      <label htmlFor={props.question.answers[2]}>
        {"C) " + props.question.answers[2]}
      </label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question.answers[3]}
        id={props.question.answers[3]}
        checked={answer === props.question.answers[3]}
        onChange={onOptionChange}
      />
      <label htmlFor={props.question.answers[3]}>
        {"D) " + props.question.answers[3]}
      </label>

      <p>
        Corret answer is {props.question.answers[props.question.correctIndex]}
      </p>
    </div>
  );
};

export default Quiz;
