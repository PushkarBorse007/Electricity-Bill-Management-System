import axios from "axios";
import React, { startTransition, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().min(4, 'Password must be at least 4 characters').required('Password is required'),
  });
  const formik = useFormik({
    initialValues: {
      firstName:"",
      lastName:"",
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      startTransition(async () => {
        try {
          startTransition(async () => {
            const res = await axios.post(
              `${process.env.REACT_APP_BASE_URL}/api/register`,
              values
            );
            toast.success(res.data.massgae);
            formik.resetForm();
          });
        } catch (error) {
          toast.error(error.response.data.Error);
          // Handle errors
        }
      });
    },
  });
  return (
    <div className="container">
      <div className="row login-row justify-content-center align-items-center">
      <div className="col-sm-5 login-wrapper p-3">
        <h1 className="text-center">Sign up</h1>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter firstname"
              name="firstName"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-danger">{formik.errors.firstName}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter lastname"
              name="lastName"
              value={formik.values.lastName}
              onChange={formik.handleChange}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-danger">{formik.errors.lastName}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
            {formik.touched.username && formik.errors.username ? (
              <div className="text-danger">{formik.errors.username}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-danger">{formik.errors.password}</div>
            ) : null}
          </Form.Group>
          <Button type="submit">Sign Up</Button>
          <div className="d-flex justify-content-center gap-2 my-2">
            <span>Have an account ? </span>
            <Link className="nav-link text-success" to={"/login"}>
              Log In
            </Link>
          </div>
        </Form>
        <Toaster />
      </div>
    </div>
    </div>
  );
};

export default SignUp;
