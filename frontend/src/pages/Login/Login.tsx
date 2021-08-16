import React from 'react'
import {Container} from "react-bootstrap"
import {useRouteMatch} from "react-router"
import "./Login.style.scss"
const Login = ()=>{
    let {path} = useRouteMatch<{patch:string}>();
  
return (
    <>
    <div className="login__page">
        <div className="top__login">
            
        </div>
            <div className="section__form pt-4">
                <h1 className="d-flex justify-content-center mt-5">ورود</h1>
            <Container className="container__login">
                <form>
                    <div className="input__group__username">
                        <label htmlFor="username" className="label__username">نام کاربری</label>
                        <input type="text" id="username"  name="username"/>
                    </div>
                    <div className="input__group__pass">
                        <label htmlFor="password" className="label__pass">رمز عبور </label>
                        <input type="password" id="password" className="my-5" name="password" />
                    </div>
                  
                    <button>ورود</button>
                </form>
            </Container>
        </div>
      
    </div>
    </>
)
}
export default Login;