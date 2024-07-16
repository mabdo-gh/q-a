import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Contents from "./components/Contents";
import Buttons from "./components/Buttons";
import { toast, ToastContainer } from "react-toastify";
import './App.css';

function App() {

  if (!localStorage.getItem("questionsAndAnswers"))
    localStorage.setItem("questionsAndAnswers", JSON.stringify([]));

  const [data, setData] = useState(JSON.parse(localStorage.getItem("questionsAndAnswers")));

  const notify = (massage, type) => toast(massage, { type: type });

  function insertQuestionAndAnswer() {
    localStorage.setItem("questionsAndAnswers", JSON.stringify([...data]));
    setData([...data]);
    notify("تم الحفظ بنجاح", "success");
  }

  function removeOneQuestionAndAnswer(id) {
    localStorage.setItem("questionsAndAnswers", JSON.stringify([...id]));
    setData([...id]);
    notify("تم الحذف بنجاح", "warning");
  }

  function deleteAllQuestionsAndAnswers() {
    localStorage.setItem("questionsAndAnswers", JSON.stringify([]));
    data.splice(0, data.length);
    setData([]);
    notify("تم حذف جميع البيانات بنجاح", "error");
  }

  return (
    <Container className="p-5">
      <Row className="justify-content-center">
        <Header />
        <Col sm="9">
          <Inputs addQuestionAndAnswer={insertQuestionAndAnswer} data={data} notify={notify} />
          <Contents data={data} deleteOneQuestionAndAnswer={removeOneQuestionAndAnswer} />
          {data.length ? (<Buttons deleteAll={deleteAllQuestionsAndAnswers} />) : null}
        </Col>
      </Row>
      <ToastContainer rtl position="top-left" hideProgressBar />
    </Container >
  );
}

export default App;

/**
 * Development by : Mahmoud Abd Elaziz
 * Mobile : 01201576447
 */
