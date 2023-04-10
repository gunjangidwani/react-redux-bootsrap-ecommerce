import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import TopNavbar from '../Coponents/Header/TopNavbar';

function OrderConfirm() {
  const [show, setShow] = useState(true);

  return (
    <>
        <TopNavbar/>
    <Container >
        <Row className="m-3">

      <Alert show={show} variant="success">
        <Alert.Heading>Order confirmed</Alert.Heading>
        <p>
        Your order is confirmed
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
        </Row>

      {/* {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>} */}
      <Row className="m-3">
        <h5>

      Your order is confirmed.
<br/>
<br/>
Your order hasn't shipped yet but we will send you ane email when it does.
        </h5>
      </Row>
    </Container>
    </>
  );
}

export default OrderConfirm;