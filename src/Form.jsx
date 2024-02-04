import React from "react";
import "./Form.css";
import { useFormik } from "formik";
import { signupSchema } from "./schemas";

export default function Form() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signupSchema,
    onSubmit: (values) => {
      console.log("🚀 ~ Form ~ values:", values);
    },
  });

  return (
    <div className="container">
      <h1>REGISTRATION FORM</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            autoComplete="off"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="invalid-feedback">{errors.name}</p>
          <br />

          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            autoComplete="off"
            placeholder="someone123@example.com"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="invalid-feedback">{errors.email}</p>
          <br />

          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            autoComplete="off"
            placeholder="At least 6 characters"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <p className="invalid-feedback">{errors.password}</p>
          <br />

          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            autoComplete="off"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {<p className="invalid-feedback">{errors.confirmPassword}</p>}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
