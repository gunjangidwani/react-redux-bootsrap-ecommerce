import React, { useState, useRef } from "react";
// import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Formik } from 'formik';
import * as yup from 'yup';
import Billing from "./billing";
import { useDispatch, useSelector } from "react-redux";
import { addBillingDetails, addShippingDetails } from "../Features/Cart/CartSlice";
import { useNavigate } from "react-router-dom";


const billingSchema = yup.object().shape({
  firstName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name is required'),
  lastName: yup.string().min(2, 'Too Short!')
    .max(50, 'Too Long!').required('Last name is required'),
  email: yup.string().email('Invalid email').required(),
  address: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('address is required'),
  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
  zip: yup.number().min(5, 'Too Short!').required('zip is required'),
  terms: yup.bool(),
});
const shippingSchema = yup.object().shape({
  firstName: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name is required'),
  lastName: yup.string().min(2, 'Too Short!')
    .max(50, 'Too Long!').required('Last name is required'),
  email: yup.string().email('Invalid email').required('email is required'),
  address: yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('address is required'),
  city: yup.string().required('city is required'),
  state: yup.string().required('state is required'),
  zip: yup.number().min(5, 'Too Short!').required('Zip is required'),
});

// const formikRef2 = useRef(null)

const handleSubmit1 = (data) => {
  console.log(JSON.stringify(data, null, 2));
}

const handleSubmit2 = (data) => {
  console.log(JSON.stringify(data, null, 2));
}

function step1(ref) {

  return (
    <Formik
      innerRef={ref}
      validationSchema={billingSchema}
      onSubmit={handleSubmit1}
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        terms: false,
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
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationFormik06">
              <Form.Label>Address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  aria-describedby="inputGroupPrepend"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Shipping address is the same as my billing address"
              onChange={handleChange}
              isInvalid={!!errors.terms}
              // feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
        </Form>
      )}
    </Formik>
  );
}

function step2(ref, form2) {
  return (
    <Formik
      innerRef={ref}
      validationSchema={shippingSchema}
      onSubmit={handleSubmit2}
      initialValues={form2}
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
            <Form.Group as={Col} md="6" controlId="svalidationFormik01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={!!errors.firstName}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="svalidationFormik02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={!!errors.lastName}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="svalidationFormikEmail">
              <Form.Label>Email</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="svalidationFormik06">
              <Form.Label>Address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  aria-describedby="inputGroupPrepend"
                  name="address"
                  value={values.address}
                  onChange={handleChange}
                  isInvalid={!!errors.address}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.address}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="svalidationFormik03">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={values.city}
                onChange={handleChange}
                isInvalid={!!errors.city}
              />

              <Form.Control.Feedback type="invalid">
                {errors.city}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="svalidationFormik04">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={values.state}
                onChange={handleChange}
                isInvalid={!!errors.state}
              />
              <Form.Control.Feedback type="invalid">
                {errors.state}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="svalidationFormik05">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                placeholder="Zip"
                name="zip"
                value={values.zip}
                onChange={handleChange}
                isInvalid={!!errors.zip}
              />

              <Form.Control.Feedback type="invalid">
                {errors.zip}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      )}
    </Formik>
  );
}


function Shipping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const formikRef1 = useRef(null);
  const formikRef2 = useRef(null);
  const [form2, initialShippingAddress] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  })
  const nextStep = () => {
    // step == 1 ? handleSubmit1 : null
    if (step == 1 && formikRef1.current.isValid) {
      if (formikRef1.current.values.terms) {
        dispatch(addShippingDetails(formikRef1.current.values))
        initialShippingAddress(formikRef1.current.values)
        setStep(step + 1);

      }
    } else if (step == 2 && formikRef2.current.isValid) {
      dispatch(addBillingDetails(formikRef2.current.values))
      setStep(step + 1);
    } else if (step === 3) {
      // console.log(values);
        navigate("/confirm");
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };
  return (
    <>
      <div className="vh-100">
        <h3 className=" p-3 mt-5">
          {
            {
              1: "Billing Details",
              2: "Shipping Details",
              3: "Payment Details",
            }[step]
          }
        </h3>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="card p-3 mt-5 w-100">
            {
              {
                1: step1(formikRef1),
                2: step2(formikRef2, form2),
                3: <Billing />,
              }[step]
            }
            <div className="d-flex justify-content-around px-5 mt-5">
              {step > 1 ? (
                <button className="btn btn-warning" onClick={prevStep}>
                  Back
                </button>
              ) : null}
              <button className="btn btn-warning" onClick={nextStep}>
                {step === 3 ? "Proceed to checkout" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}



export default Shipping;