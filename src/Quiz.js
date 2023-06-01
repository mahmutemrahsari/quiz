import { useState } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBIcon,
} from "mdb-react-ui-kit";

const Quiz = (props) => {
  const [answer, setAnswer] = useState();
  // correct props.question.answers[props.question.correctIndex]
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
  console.log("TEST");

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="justify-content-center">
        <MDBCol md="6">
          <MDBCard className="text-black">
            <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
            <MDBCardImage
              src={props.question.image}
              position="top"
              alt="quiz"
            />
            <MDBCardBody>
              <div className="d-flex justify-content-between">
                <MDBCardTitle>
                  {props.questionIndex + 1 + ") " + props.question.question}
                </MDBCardTitle>
              </div>
              <div>
                <div className="d-flex justify-content-between">
                  <span>
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
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>
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
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>
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
                  </span>
                </div>
                <div className="d-flex justify-content-between">
                  <span>
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
                  </span>
                </div>
              </div>
              <div className="d-flex justify-content-between total font-weight-bold mt-4">
                <span>Total Score</span>
                <span>{props.totalScore}</span>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Quiz;
