import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaUserAlt ,FaLock,FaEnvelopeOpen} from "react-icons/fa"
import "./Register.style.scss";
const Register = () => {
  const [auth, setAuth] = React.useState<{
    username: string;
    email: string;
    password: string;
  }>({
    username: "",
    email: "",
    password: "",
  });

  const [checkForm, setCheckForm] = React.useState<boolean>(false);

  const history = useHistory();
  const reg__email =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const reg_pass = /[^0-9a-zA-Z]/;
  const handleRegister = (e: any) => {
    setAuth({ ...auth, [e.target.name]: e.target.value });
    if (
      auth.username.length > 0 &&
      auth.password.match(reg_pass) &&
      auth.email.match(reg__email)
    ) {
      setCheckForm(true);
    } else {
      setCheckForm(false);
    }
  };

  const handleSubmitForm = (e: any) => {
    e.preventDefault();

    if (checkForm) {
      const getItems = async () => {
        const param = new URLSearchParams(auth);
        console.log(param);

        try {
          let data = await axios.get(`/api/register?${param}`);
          console.log(data);
        } catch (e) {
          console.log(e.message);
        } finally {
        }
      };

      history.push("/login");

      getItems();
    } else {
      toast.error("اطلاعات خود را کامل وارد کنید!", {
        position: "top-center",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login__page">
        <div className="top__login"></div>
        <div className="section__form pt-4">
          <h1 className="d-flex justify-content-center mt-5">ثبت نام</h1>
          <Container className="container__login">
            <form onSubmit={handleSubmitForm} className="form-register">
              <div className="input__group__username d-flex flex-column ">
             
                <input
                  className={
                    auth.username === ""
                      ? "border-input"
                      : auth.username.length < 4 && auth.username.length > 0
                      ? "border-error"
                      : "border-success"
                  }
                  type="text"
                  id="username"
                  onChange={handleRegister}
                  name="username"
                  placeholder="نام کاربری"
                />
                <FaUserAlt className="icon-user"/>
                <small className="p-1">
                  {auth.username === ""
                    ? ""
                    : auth.username.length < 4 &&
                      auth.username.length > 0 &&
                      "نام کاربری حداقل باید ۳ کاراکتر باشد"}
                </small>
              </div>
              <div className="input__group__email d-flex flex-column  my-5">
                <input
                  className={
                    auth.email === ""
                      ? "border-input"
                      : !auth.email.match(reg__email)
                      ? "border-error"
                      : "border-success"
                  }
                  type="text"
                  id="email"
                  onChange={handleRegister}
                  name="email"
                  placeholder="ایمیل"
                />
              <FaEnvelopeOpen className="icon-email"/>

                <small className="p-1">
                  {auth.email === ""
                    ? ""
                    : !auth.email.match(reg__email) &&
                      "ایمیل صحیح را وارد کنید!"}
                </small>
              </div>
              <div className="input__group__pass  d-flex flex-column mb-2">
              
                <input
                  type="password"
                  className={
                    auth.password === ""
                      ? "border-input"
                      : !auth.password.match(reg_pass)
                      ? "border-error"
                      : "border-success"
                  }
                  id="password"
                  onChange={handleRegister}
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

              <button>ورود</button>
            </form>
          </Container>
        </div>
      </div>
    </>
  );
};
export default Register;
