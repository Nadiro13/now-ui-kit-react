import React from "react";

// reactstrap components
import {

  Row,
  Col,
} from "reactstrap";

// core components

function Tab() {
  const [page] = React.useState("0");
  return (
    <>
        <Row className="collections">
          <Col md="6">
            <img
              alt="..."
              className="img-raised"
              src={require("assets/img/ev" + (4 * page) + 1 + ".jpg")}
            />
            <img
            alt="..."
            className="img-raised"
            src={require("assets/img/ev" + (4 * page) + 3 + ".jpg")}
            />
          </Col>
          <Col md="6">
            <img
              alt="..."
              className="img-raised"
              src={require("assets/img/ev" + (4 * page) + 2 + ".jpg")}
            />
            <img
              alt="..."
              className="img-raised"
              src={require("assets/img/ev" + (4 * page) + 4 + ".jpg")}/>
          </Col>
        </Row>
    </>
  );
}

export default Tab