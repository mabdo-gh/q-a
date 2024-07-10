import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Contents from "./components/Contents";
import Buttons from "./components/Buttons";
import { questionsAndAnswers } from "./Data";

function App() {

  const [questionAndAnswer, setQuestionAndAnswer] = useState(questionsAndAnswers);
  function insertQuestionAndAnswer() {
    setQuestionAndAnswer([...questionsAndAnswers]);
  }

  function deleteAllQuestionsAndAnswers() {
    questionsAndAnswers.splice(0, questionsAndAnswers.length);
    setQuestionAndAnswer([]);
  }

  function deleteOneQuestionAndAnswer(id) {
    setQuestionAndAnswer([...id]);
  }
  return (
    <Container className="p-5">
      <Row className="justify-content-center">
        <Header />
        <Col sm="9">
          <Inputs addQuestionAndAnswer={insertQuestionAndAnswer} />
          <Contents data={questionAndAnswer} deleteOneQuestionAndAnswer={deleteOneQuestionAndAnswer} />
          {questionAndAnswer.length ? (<Buttons deleteAll={deleteAllQuestionsAndAnswers} />) : null}
          {/* <Buttons /> */}
        </Col>
      </Row>
    </Container >
  );
}

export default App;

