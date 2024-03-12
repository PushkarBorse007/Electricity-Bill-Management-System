import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Footer from "./Footer";

const MainApp = () => {
  const [values, setValues] = useState({
    id: localStorage.getItem("id"),
    monthNumber: "",
  });
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [username, setUsername] = useState(localStorage.getItem("fullName"));

  const handleLogOut = () => {
    localStorage.setItem("token", "");
    navigate("/login");
  };
  const handleChange = (e) => {
    setValues({ ...values, monthNumber: e.target.value });
  };

  useEffect(() => {
    getMonthData(values);
  }, [values.monthNumber]);

  const getMonthData = async (value) => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/unit`,
        value
      );
      setData(res.data);
    } catch (error) {
      // alert(error)
    }
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
      <Row className="mt-5 py-3  justify-content-center">
        <Col md={6} className="login-wrapper main-app-row">
          <h2 className="text-center mt-2">Get Your Bill Details</h2>

          <div className="">
            <Form className="my-3">
              <Form.Label>Select the billing month</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={handleChange}
              >
                <option style={{ backgroundColor: "transparent" }}>
                  select month
                </option>
                <option value="1">Jan</option>
                <option value="2">Feb</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">Jun</option>
                <option value="7">July</option>
                <option value="8">Aug</option>
                <option value="9">Sep</option>
                <option value="10">Oct</option>
              </Form.Select>
            </Form>
          </div>
          <Toaster />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="login-wrapper p-4">
            
              {data?.length == 0 ? (
                <>
                  <h4 className="text-center">No Data available please select month</h4>
                </>
              ) : (
                <>
                  <h2>Total Cunsumation Unit {data.units_consumed}</h2>
                  <Table striped bordered hover variant="dark">
                    <tbody>
                      <tr>
                        <td>Unit Cunsumed</td>
                        <td>{data?.units_consumed}</td>
                      </tr>
                      <tr>
                        <td>Per Unit Charge</td>
                        <td>{data.units_consumed > 100 ? "6₹" : "4₹"}</td>
                      </tr>
                      <tr>
                        <td>Total Bill</td>
                        <td>
                          {Number(data.units_consumed) *
                            (data.units_consumed > 100 ? 6 : 4)}
                          ₹
                        </td>
                      </tr>

                      <tr>
                        <td></td>
                        <td>
                          <Button> Pay Now</Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>

                  <span className="text-white my-4">
                    {data.units_consumed > 100
                      ? "Note:- Your unit cunsumtion is more than 100 there for rate per unit is 6₹"
                      : "Note:- Your unit cunsumtion is less than 100 there for rate per unit is 4₹"}
                  </span>
                </>
              )}
          </div>
        </Col>
      </Row>
   </div>
      <Footer/>
    </>
  );
};

export default MainApp;
