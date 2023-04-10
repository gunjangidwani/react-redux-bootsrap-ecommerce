import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';



const schema = yup.object().shape({
  name: yup.string().required('Name is required'),
  cardNumber: yup.number().min(16, 'Invalid').required('Card Number is required'),
  expiration: yup.string().matches(
    /([0-9]{2})\/([0-9]{2})/,
    'Not a valid expiration date. Example: MM/YY'
  ).required(),
  cvv: yup.number().min(3, 'invalid').required('CVV is requried')
});
const handleSubmitBilling = (data) => {
  console.log(JSON.stringify(data, null, 2));
}
function Billing() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        cardName: '',
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
        <Form noValidate onSubmit={handleSubmitBilling}>
          <Row className="mb-3 w-100">
            <Form.Group as={Col} md="6" controlId="bvalidationFormik01">
              <Form.Label>Name on card</Form.Label>
              <Form.Control
                type="text"
                name="cardName"
                value={values.cardName}
                onChange={handleChange}
                isInvalid={!!errors.cardName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="bvalidationFormik02">
              <Form.Label>Credit card number</Form.Label>
              <Form.Control
                type="number"
                name="cardNumber"
                value={values.cardNumber}
                onChange={handleChange}
                isInvalid={!!errors.cardNumber}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
          </Row>
          <Row className="mb-3">
            
            <Form.Group as={Col} md="3" controlId="bvalidationFormik04">
              <Form.Label>Expiration</Form.Label>
              <Form.Control
                type="text"
                placeholder="MM/YY"
                name="expiration"
                value={values.expiration}
                onChange={handleChange}
                isInvalid={!!errors.expiration}
              />
              <Form.Control.Feedback type="invalid">
                {errors.expiration}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="bvalidationFormik05">
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
          {/* <Button as={Col} md="12" type="submit">Continue to checkout</Button> */}
        </Form>
      )}
    </Formik>
  );
}

export default Billing;