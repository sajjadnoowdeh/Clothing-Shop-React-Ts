import React from "react";
import { Container } from "react-bootstrap";
import { Redirect, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Store/store";
import { getAuthThunk } from "../../Store/reducers/auth.reducer/auth.reducer";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import { FaEnvelopeOpen,FaLock } from "react-icons/fa";
import "./Login.style.scss";
const Login = () => {
  const [statusBtn, setStatusBtn] = React.useState<boolean>(false);
  const [auth, setAuth] = React.useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const history = useHistory();
  const { err, email, loading, password, isLogin } = useSelector(
    (state: RootState) => state.reducer.auth
  );
  const authState = useSelector((state: RootState) => state.reducer.auth);
  const dispatch = useDispatch();
  const reg__email =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const reg_pass = /[^0-9a-zA-Z]/;
  if (isLogin) {
    <Redirect to="/" />;
  }
  const handleLogin = (e: any) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
    if (!(auth.email.match(reg__email) && auth.password.match(reg_pass))) {
      setStatusBtn(true);
    } else {
      setStatusBtn(false);
    }
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    dispatch(getAuthThunk(auth));
    if (auth.email === "" || auth.password === "") {
      setStatusBtn(true);
    }
  };

  React.useEffect(() => {
    if (auth.email === "" || auth.password === "") {
      setStatusBtn(true);
    }
    if (err !== "") {
      toast.error(err, {
        position: "top-center",
        autoClose:4000,

      });
    } else {
      history.push("/");
    }
  }, [loading]);

  React.useEffect(() => {
    if (email !== "") {
      history.push("/");
    }
  }, [email, password]);

  return (
    <>
      <ToastContainer />
      <div className="login__page">
        <div className="top__login"></div>
        <div className="section__form pt-4">
          <h1 className="d-flex justify-content-center mt-5"> ورود</h1>
          <Container className="container__login">
            <form onSubmit={handleSubmitForm}>
              <div className="input__group__email my-5 d-flex flex-column">
                
                <input
                  className={
                    auth.email === ""
                      ? "border-input "
                      : !auth.email.match(reg__email)
                      ? "border-error "
                      : "border-success "
                  }
                  type="text"
                  id="email"
                  onChange={handleLogin}
                  name="email"
                  placeholder="ایمیل"
                />
                <FaEnvelopeOpen className="icon-user"/>
               
                <small className="p-1">
                  {auth.email === ""
                    ? ""
                    : !auth.email.match(reg__email) &&
                      "ایمیل صحیح را وارد کنید!"}
                </small>
              </div>
              <div className="input__group__pass mb-2 d-flex flex-column">
              
                <input
                  type="password"
                  id="password"
                  onChange={handleLogin}
                  className={
                    auth.password === ""
                      ? "border-input"
                      : !auth.password.match(reg_pass)
                      ? "border-error"
                      : "border-success"
                  }
                  name="password"
                  placeholder="رمز عبور"
                />
                <FaLock className="icon-pass"/>
                <small className="p-1">
                  {auth.password === ""
                    ? ""
                    : !auth.password.match(reg_pass) &&
                      " رمز عبور شما باید  عدد وحروف کوچک و بزرگ باشد !"}
                </small>
              </div>

              <button
                disabled={statusBtn}
                className={statusBtn ? "stop mb-3" : "mb-3"}
              >
                {loading ? (
                  <div>
                    <Spinner
                      style={{ fontSize: "34px" }}
                      animation="border"
                      variant="success"
                    />{" "}
                  </div>
                ) : (
                  "ورود"
                )}
              </button>
              <Link to="/register">ثبت نام نکرده اید؟</Link>
            </form>
             <img src="./login.png" alt="" />
          </Container>
        </div>
      </div>
    </>
  );
};
export default Login;
