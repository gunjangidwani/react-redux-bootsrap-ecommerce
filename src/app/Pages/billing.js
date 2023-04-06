import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';



const schema = yup.object().shape({
  name: yup.string().required(),
  cardNumber: yup.string().required(),
  expiration: yup.string().required(),
  cvv: yup.string().required()
});

function Billing() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        cardNumber: '',
        expiration: '',
        cvv: ''
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Name on card</Form.Label>
              <Form.Control
                type="text"
                name="Name on card"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label>Credit card number</Form.Label>
              <Form.Control
                type="text"
                name="cardNumber"
                value={values.cardNumber}
                onChange={handleChange}
                isValid={touched.cardNumber && !errors.cardNumber}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
          </Row>
          <Row className="mb-3">
            
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>Expiration</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="expiration"
                value={values.expiration}
                onChange={handleChange}
                isInvalid={!!errors.expiration}
              />
              <Form.Control.Feedback type="invalid">
                {errors.expiration}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>CVV</Form.Label>
              <Form.Control
                type="text"
                placeholder="cvv"
                name="cvv"
                value={values.cvv}
                onChange={handleChange}
                isInvalid={!!errors.cvv}
              />

              <Form.Control.Feedback type="invalid">
                {errors.cvv}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button as={Col} md="12" type="submit">Continue to checkout</Button>
        </Form>
      )}
    </Formik>
  );
}

export default Billing;