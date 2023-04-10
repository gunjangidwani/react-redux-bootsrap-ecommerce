import React, { useEffect } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import { fetchAllCategories } from "../../Features/Category/CategorySlice";
import { HiShoppingCart } from "react-icons/hi";
import { totalCartItem } from "../../Features/Cart/CartSelector";

function TopNavbar() {
  const { categories } = useSelector((state) => state.categories);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);
  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          Shop Now
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavDropdown title="Catrgoris" id="basic-nav-dropdown">
              {categories &&
                categories.map((c, index) => {
                  return (
                    <Link
                      to={`/category/${c}`}
                      className="text-capitalize dropdown-item"
                      key={index}
                    >
                      {c}
                    </Link>
                  );
                })}
            </NavDropdown>
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
            <NavLink to={"/contact"} className="nav-link">
              Contact
            </NavLink>
            <NavLink to={"/cart"} className="nav-link">
              <div className="cart-icon">
                {/* <div className="d-flex flex-column"> */}
                  <span>
                    <HiShoppingCart />
                    <Badge pill text="dark" bg="danger" className="bg">
                      {totalItems}
                    </Badge>
                  </span>
                {/* </div> */}
              </div>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
