import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

function Inputs({ addQuestionAndAnswer,data, notify }) {

    const [qu, setQu] = useState('')
    const [an, setAn] = useState('')

    function addQuAn() {
        if (!qu || !an)
            return notify("يجب عليك ادخال السؤال والاجابة", "error");
        else if (!qu)
            return notify("يجب عليك ادخال السؤال", "error");
        else if (!an)
            return notify("يجب عليك ادخال الاجابة", "error");

        data.push({ qu: qu, an: an });
        setQu('');
        setAn('');
        addQuestionAndAnswer();
    }

    return (
        <Row className="mb-3">
            <Col sm="5">
                <Form.Control type="text" onChange={(e) => setQu(e.target.value)} value={qu} placeholder="ادخل السؤال" className="w-100 h-100" />
            </Col>
            <Col sm="5">
                <Form.Control type="text" onChange={(e) => setAn(e.target.value)} value={an} placeholder="ادخل الاجابة" className="w-100 h-100" />
            </Col>
            <Col sm="2">
                <Button type="submit" className="w-100" onClick={addQuAn}>إضافة</Button>
            </Col>
        </Row>
    );
}

export default Inputs;

/**
 * Development by : Mahmoud Abd Elaziz
 * Mobile : 01201576447
 */
