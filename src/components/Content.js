import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import contentData from "../utils/contentData";

class Content extends Component {
  render() {
    return (
      <div className="next-steps my-5">
        {/* <h2 className="my-5 text-center">What can I do next?</h2> */}
        <Row className="d-flex justify-content-between">
          {/* {contentData.map((col, i) => (
            <Col key={i} md={5} className="mb-4">
              <h6 className="mb-3">
                <a href={col.link}>
                  <FontAwesomeIcon icon="link" className="mr-2" />
                  {col.title}
                </a>
              </h6>
              <p>{col.description}</p>
            </Col>
          ))} */}
          <Col md={5} className="mb-4">
            {/* <h6 className="mb-3">
              <a href="#">
                <FontAwesomeIcon icon="link" className="mr-2" />
                {col.title}
              </a>
              H6
              </h6> */}


            <div className="card" style={{ "width": "18rem" }}>
              <img src="/images/cigarro-de-palha-palheiros-paulistinha-c20.jpg" className="card-img-top" alt="Tradicional" />
              <div className="card-body text-center">
                <h6 className="card-title">Tradicional</h6>
                {/* <p className="card-text">Menta</p> */}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h5 className="float-left" style={{ "margin": "0.3em" }}>R$ 19</h5>
                  <button type="button" id="btn-comprar-menta" className="btn-margin btn btn-primary float-right">Comprar</button>
                </li>
              </ul>
            </div>









            {/* <p>{col.description}</p> */}
          </Col>
          <Col md={5} className="mb-4">
            {/* <h6 className="mb-3">
              <a href="#">
                <FontAwesomeIcon icon="link" className="mr-2" />
                {col.title}
              </a>
              H6
              </h6> */}

            <div className="card" style={{ "width": "18rem" }}>
              <img src="/images/cigarro-de-palha-palheiros-paulistinha-menta-c20.jpg" className="card-img-top" alt="Tradicional" />
              <div className="card-body text-center">
                <h6 className="card-title">Menta</h6>
                {/* <p className="card-text">Menta</p> */}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <h5 className="float-left" style={{ "margin": "0.3em" }}>R$ 20</h5>
                  <button type="button" id="btn-comprar-menta" className="btn-margin btn btn-primary float-right">Comprar</button>
                </li>
              </ul>
            </div>


            {/* <p>{col.description}</p> */}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Content;
