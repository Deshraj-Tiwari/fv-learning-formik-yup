import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="container">
      <h1>REGISTRATION FORM</h1>
      <br />
      <form>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            autoComplete="off"
          />
          <br />

          <label className="form-label" placeholder="someone123@example.com">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            autoComplete="off"
          />
          <br />

          <label className="form-label" placeholder="At least 6 characters">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            autoComplete="off"
          />
          <br />

          <label className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            autoComplete="off"
          />
          <br />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
