import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const About = () => {
  const [username, setUsername] = useState(localStorage.getItem("fullName"));
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <Row className=" justify-content-center py-4 ">
          <div className="col-sm-6 col-12 header py-4 px-4">
            <div className="d-flex justify-content-between">
              <div className="d-flex gap-2">
                <Link className="nav-link" to={"/"}>
                  <h5>
                    Electro<span className="text-success">Pay</span>
                  </h5>
                </Link>
                <Link className="nav-link" to={"/about"}>
                  <h5>About us</h5>
                </Link>
              </div>
              <div className="d-flex gap-4 align-items-start">
                <h5 className="d-none d-sm-block">{username}</h5>
                <Button onClick={handleLogOut} size="sm">
                  Log Out
                </Button>
              </div>
            </div>
            <div></div>
          </div>
        </Row>

        <Row>
          <Col xs={12}>
            <div className="about-wrapper">
              <div
                className="px-4 d-flex justify-content-center flex-column"
                style={{ height: "400px" }}
              >
                <h2>Pay Electricity Bill</h2>
                <h4>
                  Onlline <span className="text-success">Easily</span>
                </h4>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <div className="row justify-content-center gap-2">
              <div className="col-md-5">
                <img
                  src="./h1.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="col-md-5">
                <h5 style={{ textAlign: "justify", lineHeight: "30px" }}>
                  The Employee Management System runs online, which allows you
                  to access any information from anywhere in the world at any
                  given time, as long as you have Internet access. Manage your
                  employees from anywhere. The Employee Management System runs
                  online, which allows you to access any information from
                  anywhere in the world at any given time, as long as you have
                  Internet access. Manage your employees from anywhere. The
                  Employee Management System runs online, which allows you to
                  access any information from anywhere in the world at any given
                  time, as long as you have Internet access. Manage your
                  employees from anywhere. Electricity Billing
                </h5>
              </div>
            </div>
          </Col>
          <Col xs={12} className="mt-5">
            <div className="row justify-content-center gap-2">
              <div className="col-md-5">
                <h5 style={{ textAlign: "justify", lineHeight: "30px" }}>
                  Today people are accustomed to accessing meaningful
                  information from a huge array of sources. The reality is that
                  workplace learning happens continuously in lots of different
                  ways. Today people are accustomed to accessing meaningful
                  information from a huge array of sources. The reality is that
                  workplace learning happens continuously in lots of different
                  ways. Today people are accustomed to accessing meaningful
                  information from a huge array of sources. The reality is that
                  workplace learning happens continuously in lots of different
                  ways. Today people are accustomed to accessing meaningful
                  information from a huge array of sources. The reality is that
                  workplace learning happens continuously in lots of different
                  ways.
                </h5>
              </div>
              <div className="col-md-5">
                <img
                  src="./h2.jpg"
                  alt=""
                  className="img-fluid"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-4 pt-5 justify-content-center " style={{paddingBottom:"100px"}}>
          <h1 className="text-center text-white my-3">Founders</h1>
          <Col md={3}>
            <Card style={{ backgroundColor: "#00000088" }} className="h-100">
              <div
                style={{ width: "100%", height: "300px", overflow: "hidden" }}
              >
                <img
                  src="./p3.jpg"
                  alt=""
                  className="img-fluid"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center text-white">
                  Ajinkya Patil
                </Card.Title>
                <Card.Text className="text-center text-white">
                  I am Ajinkya Patil , a passionate software developer with
                  expertise in creating robust and efficient solutions.
                </Card.Text>
                <div className="text-center">
                  <Link to={"/"}>
                    <i
                      className="bi bi-linkedin text-primary"
                      style={{ fontSize: "1.6rem" }}
                    ></i>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card style={{ backgroundColor: "#00000088" }} className="h-100">
              <div
                style={{ width: "100%", height: "300px", overflow: "hidden" }}
              >
                <img
                  src="./p1.jpg"
                  alt=""
                  className="img-fluid"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center text-white">
                  Bhavesh Dave
                </Card.Title>
                <Card.Text className="text-center text-white">
                  I'm Bhavesh Dave, a 23-year-old computer enthusiast with a
                  passion for technology and its ever-evolving landscape.
                </Card.Text>
                <div className="text-center">
                  <Link to={"/"}>
                    <i
                      className="bi bi-linkedin text-primary"
                      style={{ fontSize: "1.6rem" }}
                    ></i>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card style={{ backgroundColor: "#00000088" }} className="h-100">
              <div
                style={{ width: "100%", height: "300px", overflow: "hidden" }}
              >
                <img
                  src="./p2.jpg"
                  alt=""
                  className="img-fluid"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <Card.Body>
                <Card.Title className="text-center text-white">
                  Pushkar Borse
                </Card.Title>
                <Card.Text className="text-center text-white">
                  I'm Pushkar Borse, excited to unravel the endless potential in
                  the ever-evolving landscape of technology!
                </Card.Text>
                <div className="text-center">
                  <Link to={"/"}>
                    <i
                      className="bi bi-linkedin text-primary"
                      style={{ fontSize: "1.6rem" }}
                    ></i>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
      </div>
      <Footer />
    </>
  );
};

export default About;
