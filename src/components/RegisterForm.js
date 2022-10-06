import React from "react";
import { Link } from "react-router-dom";
import { Constants } from "../Constants";

const initstate = { type: "password" };
const reducer = (state, action) => {
  if (state.type === "password") {
    return { type: "text" };
  } else {
    return { type: "password" };
  }
};
const RegisterForm = () => {
  const [error, setError] = React.useState({});
  const [success, setSuccess] = React.useState("");
  const [state, dispatch] = React.useReducer(reducer, initstate);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url = Constants.register;
    // console.log(url);
    let body = new FormData(e.target);
    // console.log(body)
    let res = await fetch(url, {
      method: "POST",
      body,
    });
    let data = await res.json();
    //console.log(data);
    if (data.status !== 1) {
      setError(data.message);
      return;
    }
    setSuccess(data.message);
    e.target.reset();
    setError({});
  };

  return (
    <section
      className="home-banner"
      style={{ backgroundImage: "url(/assets/frontend/images/home-bg.jpg)" }}
    >
      <div className="container">
        <div className="banner-content pt-5">
          <div className="row justify-content-center">
            <div className="col-lg-6 mt-5 pt-4">
              <div className="logform shadow-lg">
                {success ? (
                  <div className="alert alert-success">{success}</div>
                ) : (
                  <></>
                )}
                <h2 className="text-center fw-bold fs-3 text-uppercase mb-4">
                  Sign up
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group mb-3">
                        <label>
                          First Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                          autoComplete="username"
                          name="firstname"
                        />
                        <span className="text-danger">{error.firstname}</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-3">
                        <label>
                          Last Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                          name="lastname"
                        />
                        <span className="text-danger">{error.lastname}</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-3">
                        <label>
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                        />
                        <span className="text-danger">{error.email}</span>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group mb-3">
                        <label>
                          Password <span className="text-danger">*</span>
                        </label>
                        <div className="position-relative">
                          <input
                            type={state.type}
                            className="form-control"
                            placeholder="********************"
                            name="password"
                          />
                          <span className="text-danger">{error.password}</span>
                          <span
                            toggle="password-field"
                            onClick={dispatch}
                            className={`fa fa-fw ${state.type === 'password'? 'fa-eye': 'fa-eye-slash'} field-icon toggle-password`}
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <p>
                      By clicking let's play you agree to Sportthon{" "}
                      <a href="#" className="text-lightmaroon fw-bold">
                        {" "}
                        User Agreement{" "}
                      </a>{" "}
                      and{" "}
                      <a href="#" className="text-lightmaroon fw-bold">
                        Privacy Policy
                      </a>
                    </p>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-marooon w-100 text-uppercase"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                  <div className="mb-3">
                    <p>
                      Already have an Account?{" "}
                      <Link to="/login" className="text-lightmaroon fw-bold">
                        Login
                      </Link>
                    </p>
                  </div>
                  <div className="ordivider">
                    <span>or</span>
                  </div>
                  <p className="text-center">Continue With </p>
                  <div className="socaillogin">
                    <ul>
                      <li>
                        <a href="#" className="facebook">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="google">
                          <i className="fab fa-google"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegisterForm;
