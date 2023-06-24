import classes from "./Popup.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { toPrice } from "../../shared/utils";

function Popup({ prod, hidePopup }) {
  const navigate = useNavigate();
  const price = toPrice(prod.price);

  return (
    <>
      <div className={classes.Backdrop}></div>
      <div className={classes.Popup}>
        <div className={classes.Img}>
          <img src={prod.img1} alt="apple" />
        </div>
        <div>
          <p className={classes.Name}>{prod.name}</p>
          <p className={classes.Price}>{price} VND</p>
          <p className={classes.Description}>{prod.long_desc}</p>

          <button
            className={classes.BtnView}
            // chuyển sang trang PageDetail khi click vào View Detail
            onClick={() => {
              navigate(`/detail/${prod._id["$oid"]}`);
            }}
          >
            <ShoppingCartIcon sx={{ fontSize: 20 }} />
            View Detail
          </button>
        </div>
        <button className={classes.BtnHide} onClick={hidePopup}>
          X
        </button>
      </div>
    </>
  );
}

export default Popup;
