const Quiz = (props) => {
  return (
    <div>
      {props.question.question}
      <p></p>
      <input
        type="radio"
        name={props.question}
        value={props.question}
        id={props.question}
      />
      <label htmlFor={props.question}>A) {props.question.answers[0]}</label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question}
        id={props.question}
      />
      <label htmlFor={props.question}>B) {props.question.answers[1]}</label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question}
        id={props.question}
      />
      <label htmlFor={props.question}>C) {props.question.answers[2]}</label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question}
        id={props.question}
      />
      <label htmlFor={props.question}>D) {props.question.answers[3]}</label>
    </div>
  );
};

export default Quiz;
