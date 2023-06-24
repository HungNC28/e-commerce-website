import { Link, useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./Login.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/reducer/auth";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // lấy users từ localStorage
  const userArr = localStorage.getItem("userArr");
  const users = userArr ? JSON.parse(userArr) : [];

  // function getDataLocal(item) {
  //   if (!item) return [];
  //   const docs = localStorage.getItem(item);
  //   const data = docs ? JSON.parse(docs) : [];
  //   return data;
  // }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    // email và password để trống thì thông báo lỗi
    if (!email || !password) {
      setErrorMessage("Please fill in all the required fields.");
      return;
    }

    const account = users.find((u) => u.email === email);
    if (!account) {
      setErrorMessage("Email does not exist!");
      return;
    } else {
      if (password === account.password) {
        dispatch(authActions.onLogin(account));

        navigate("/");
      } else {
        setErrorMessage("Password is incorrect!");
        return;
      }
    }
  }
  return (
    <Card>
      <div className={classes.Login}>
        <div className={classes.LoginContent}>
          <p className={classes.LoginTitle}>Sign In</p>
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div className={classes.errorMessage}>{errorMessage}</div>
            )}
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
            />
            <button className={classes.btnLogin} type="submit">
              SIGN IN
            </button>
          </form>
          <div className={classes.question}>
            <p>Creat an account?</p>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Login;
