import React, { Fragment } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItemCard from "../Coponents/Cart/CartItemCard";
import Footer from "../Coponents/Footer/Footer";
import TopNavbar from "../Coponents/Header/TopNavbar";
import {
  subTotalPrice,
  totalPrice,
  totalTax,
} from "../Features/Cart/CartSelector";
import { cartState } from "../Features/Cart/CartSlice";
import Shipping from "./shippingForm";
import Billing from "./billing";

function Checkout() {
  const navigate = useNavigate();
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const tax = totalTax(state);
  const totalAmmount = totalPrice(state);
  const goToCart = () => {
    navigate("/cart");
  }
  // console.log(carts, "carta");
  return (
    <Fragment>
      <TopNavbar />
      <Container>
        <Row>
          {!carts.length && (
            <div className="w-100 my-5 text-center text-danger">
              <h3>
                You don't have any product in carts.{" "}
                <Link to="/products" className="text-dark text-decoration-none">
                  {" "}
                  Go for shoping{" "}
                </Link>
              </h3>
            </div>
          )}
        </Row>

        {carts.length > 0 && (
          <div className="my-3">
            {/* <Card> */}
            <Row>
              <Col xs={12} md={8}>
                <Shipping />
              </Col>
              <Col xs={12} md={4}>
                <h3>
                  Order Summery
                </h3>
                {carts.length > 0 &&
            carts.map((c) => {
              return (
                <Col key={c.id}>
                  <CartItemCard item={c} hide={true} />
                </Col>
              );
            })}
                <Card>

                <Card.Body>
                <div className="d-flex justify-content-around ">
                  <div className="w-100 align-middle">
                    <h6 className="fs-8 align-middle d-inline">
                      Subtotal: ${subTotal}
                    </h6>
                  </div>
                  <div className="w-100 ">
                    <h6 className="fs-8 align-middle d-inline">Tax(2%): ${tax}</h6>
                  </div>
                  <div className="w-100 align-middle">
                    <h6 className="fs-8 align-middle d-inline">
                      Total(USD): ${totalAmmount.toFixed(2)}
                    </h6>
                  </div>
                </div>
                </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* </Card> */}
          </div>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
}

export default Checkout;
