import { Link, useNavigate } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./Register.module.css";
import { useState } from "react";

function Register() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // không được để trống
    if (!email || !password || !phone || !fullName) {
      setErrorMessage("Please fill in all the required fields.");
      return;
    }

    // Password phải dài hơn 8 ký tự
    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters.");
      return;
    }

    // Email tồn tại rồi thì thông báo lỗi
    const existingUser = getUserByEmail(email);
    if (existingUser) {
      setErrorMessage("Email already exists.");
      return;
    }

    const newUser = {
      email,
      password,
      fullName,
      phone,
    };

    addUser(newUser);
    clearForm();
    redirectToSignIn();
  };

  // xem Email đã tồn tại chưa
  const getUserByEmail = (email) => {
    const existingUser = getUserArr().find((user) => user.email === email);
    return existingUser;
  };

  // thêm user và lưu vào localStorage
  const addUser = (user) => {
    const userArr = getUserArr();
    userArr.push(user);
    localStorage.setItem("userArr", JSON.stringify(userArr));
  };

  // lấy dữ liệu từ localStorage về
  const getUserArr = () => {
    const userArr = localStorage.getItem("userArr");
    return userArr ? JSON.parse(userArr) : [];
  };

  // Xóa form nhập
  const clearForm = () => {
    setEmail("");
    setPassword("");
    setFullName("");
    setPhone("");
  };

  // chuyển sang trang Login
  const redirectToSignIn = () => {
    navigate("/login");
  };
  return (
    <Card>
      <div className={classes.Register}>
        <div className={classes.RegisterContent}>
          <p className={classes.RegisterTitle}>Sign Up</p>
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <div className={classes.errorMessage}>{errorMessage}</div>
            )}
            <input
              type="name"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Full Name"
            />
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
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="Phone"
            />
            <button className={classes.btnResgister} type="submit">SIGN UP</button>
          </form>
          <div className={classes.question}>
            <p>Login?</p>
            <Link to="/login">Click</Link>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Register;
