import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./Productlist.css"; // Add your CSS file
import axios from "axios";
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";

function Productlist() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState();

  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data);
    setProduct(result.data);
  };
  const SearchData = () => {
    const dataSearch = product.filter((i) =>
      (i.title + i.category)
        .toLowerCase()
        .trim()
        .includes(search.toLowerCase().trim())
    );
    setProduct(dataSearch);
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  console.log(product);
  console.log(search);

  return (
    <div>
      <Container className="mt-5">
        <Row className="header-row">
          <Col lg={6} className="text-center">
            <img
              className="shop-logo"
              src="https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149704603.jpg"
              alt="Shop Logo"
            />
          </Col>
          <Col lg={6} className="text-center">
            <h2 className="welcome-text">
              Welcome to your Shopping world{" "}
              <span className="shop-name">Smile Shop</span>
            </h2>
            <FloatingLabel
              onChange={(e) => setSearch(e.target.value)}
              controlId="floatingPassword"
            >
              <InputGroup className="mt-4">
                <Form.Control type="search" placeholder="Search" />
                <Button onClick={SearchData}>
                  <i className="bi bi-search"> Search</i>
                </Button>
              </InputGroup>
            </FloatingLabel>
          </Col>
        </Row>
      </Container>
      {product.length > 0 ? (
        <Row className="product-row">
          {product.map((i) => (
            <Col lg={3} md={4} sm={6} key={i.id}>
              <Link to={`/view/${i.id}`} style={{ textDecoration: "none" }}>
                <Card className="product-card">
                  <Card.Img
                    style={{ height: "360px" }}
                    className="product-image"
                    variant="top"
                    src={i.image}
                  />
                  <Card.Body>
                    <Card.Title className="product-title">
                      {i.title.length > 35
                        ? i.title.slice(0, 35) + "..."
                        : i.title}
                    </Card.Title>
                    <Card.Text className="product-text">
                      {i.category}
                      <br />
                      <h5 className="product-price">${i.price}</h5>
                      <br />
                      <b className="product-rating">
                        Rating:{" "}
                        <span
                          className={
                            i.rating.rate > 4
                              ? "text-success"
                              : i.rating.rate > 3
                              ? "text-warning"
                              : "text-danger"
                          }
                        >
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>{" "}
                      </b>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center m-4 text-danger">
          <i className="fa-solid fa-spinner fa-spin fa-4x"></i>
        </div>
      )}
    </div>
  );
}

export default Productlist;
