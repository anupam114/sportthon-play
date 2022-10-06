import React from "react";
import { Link } from "react-router-dom";
import { Constants } from "../Constants";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigation = useNavigate();
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const { cookie } = document;
    if(cookie.includes('_token=')) {
      navigation('/dashboard')
    }
  }, [navigation])

  const handleLogin = async (e) => {
    e.preventDefault();
    let url = Constants.login;
    // console.log(url);
    let body = new FormData(e.target);
    console.log(body);
    let res = await fetch(url, {
      method: "POST",
      body,
    });
    let data = await res.json();
    if (data.status !== 1) {
      setError(data.message);
      return;
    }
    // localStorage.setItem('_token', JSON.stringify(data._token));
    const d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = `_token=${
      data._token
    };expires=${d.toUTCString()};path="/"`;

    e.target.reset();
    setError("");
    // console.log(data);
    navigation("/dashboard");
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
                {error ? (
                  <span className="alert alert-danger" role="alert">
                    {error}
                  </span>
                ) : (
                  <></>
                )}
                <h2 className="text-center fw-bold fs-3 text-uppercase mb-4">
                  Login
                </h2>
                <form onSubmit={handleLogin}>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email ID"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-marooon w-100 text-uppercase"
                    >
                      Login
                    </button>
                  </div>
                  <div className="mb-3">
                    <p>
                      <a href="#" className="text-white">
                        Forgot Password?
                      </a>
                    </p>
                    <p>
                      Create an new account?{" "}
                      <Link to="/register" className="text-lightmaroon fw-bold">
                        Sign Up
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
export default LoginForm;
