import { Accordion, Alert, Button, Row } from "react-bootstrap";

function Contents({ deleteOneQuestionAndAnswer, data }) {

    function deleteOne(index) {
        data.splice(index, 1);
        deleteOneQuestionAndAnswer(data);
    }

    return (
        <Row>
            <Accordion>
                {
                    data.length ? data.map((quAn, index) => (
                        <Accordion.Item eventKey={index} key={index} className="mb-2">
                            <Accordion.Header>{index + 1} - {quAn.qu}</Accordion.Header>
                            <Accordion.Body>
                                {quAn.an}
                                <Button className="btn-sm mx-3" variant="warning" onClick={() => deleteOne(index)}>حذف السؤال</Button>
                            </Accordion.Body>
                        </Accordion.Item>
                    )) : <Alert variant='warning' className='text-center fs-4'>لا توجد اي اسئلة</Alert>
                }
            </Accordion>
        </Row>
    );
}

export default Contents;

/**
 * Development by : Mahmoud Abd Elaziz
 * Mobile : 01201576447
 */
