import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

function SingleView() {
  const params = useParams();
  console.log(params.id);
  const [view, setView] = useState();
  const singleData = async () => {
    const viewResult = await axios.get(
      `https://fakestoreapi.com/products/${params.id}`
    );
    setView(viewResult.data);
  };
  useEffect(() => {
    singleData();
  }, []);

  return (
    <div>{ view?.id ?
      <Row>
        <Col lg={6}>
          <img
            src={view?.image}
            className="w-100 p-5"
            style={{ height: "500px" }}
            alt=""
          />
        </Col>
        <Col lg={6}>
          <ListGroup className="m-5 p-5">
            <ListGroup.Item>{view?.title}</ListGroup.Item>
            <ListGroup.Item>{view?.category}</ListGroup.Item>
            <ListGroup.Item> $:{view?.price}</ListGroup.Item>
            <ListGroup.Item>{view?.description}</ListGroup.Item>
            <ListGroup.Item>
              Rating : {view?.rating?.rate}{" "}
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row> :
       <div className="text-center m-4 text-danger">
       <i className="fa-solid fa-spinner fa-spin fa-4x"></i>
     </div> }
    </div>
  );
}

export default SingleView;
