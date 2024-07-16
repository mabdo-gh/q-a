import { Button, Col } from "react-bootstrap";

function Buttons({deleteAll}) {
    return (
        <Col className="mt-2">
            <Button className="w-100" variant="danger" onClick={deleteAll}>حذف جميع الأسئلة</Button>
        </Col>
    );
}

export default Buttons;

/**
 * Development by : Mahmoud Abd Elaziz
 * Mobile : 01201576447
 */
