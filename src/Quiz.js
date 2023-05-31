const Quiz = (props) => {
  return (
    <div>
      {props.question.question}
      <p></p>
      <input
        type="radio"
        name={props.question}
        value={props.question}
        id={props.question.answers[0]}
      />
      <label htmlFor={props.question.answers[0]}>
        A) {props.question.answers[0]}
      </label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question}
        id={props.question.answers[1]}
      />
      <label htmlFor={props.question.answers[1]}>
        B) {props.question.answers[1]}
      </label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question}
        id={props.question.answers[2]}
      />
      <label htmlFor={props.question.answers[2]}>
        C) {props.question.answers[2]}
      </label>
      <p></p>

      <input
        type="radio"
        name={props.question}
        value={props.question}
        id={props.question.answers[3]}
      />
      <label htmlFor={props.question.answers[3]}>
        D) {props.question.answers[3]}
      </label>
    </div>
  );
};

export default Quiz;
