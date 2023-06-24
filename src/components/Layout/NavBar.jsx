import { useNavigate } from "react-router-dom";

import Card from "../UI/Card";
import classes from "./NavBar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import { authActions } from "../../redux/reducer/auth";

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // lấy currentUser từ localStorage
  const currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : undefined;

  function handleLogout() {
    // nhấn Logout
    dispatch(authActions.onLogout());
    navigate("/login");
  }

  return (
    <Card>
      <nav>
        <ul className={classes.NavBarList}>
          <div className={classes.NavBarLeft}>
            <li className={classes.NavBarHome}>
              <a
                //nhấn vào nút Home chuyển sang trang HomePage
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                //nhấn vào nút Shop chuyển sang trang ShopPage
                onClick={() => {
                  navigate("/shop");
                }}
              >
                Shop
              </a>
            </li>
          </div>
          <li>
            <h2>BOUTIQUE</h2>
          </li>
          <div className={classes.NavBarRight}>
            <li>
              <a
                //nhấn vào nút Cart chuyển sang trang CartPage
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <ShoppingCartIcon sx={{ fontSize: 20 }} />
                Cart
              </a>
            </li>
            <li className={classes.LoginLogout}>
              <a
                //nhấn vào nút Login chuyển sang trang LoginPage
                onClick={() => {
                  navigate("/login");
                }}
              >
                <PersonIcon sx={{ fontSize: 20 }} />
                {/* nếu có currentUser thì hiện tên */}
                {currentUser ? `${currentUser.fullName}` : "Login"}
              </a>
              <div onClick={handleLogout} className={classes.Logout}>
                {/* nếu có currentUser thì hiện nút Logout */}
                {currentUser ? "{ Logout }" : ""}
              </div>
            </li>
          </div>
        </ul>
      </nav>
    </Card>
  );
}

export default NavBar;
