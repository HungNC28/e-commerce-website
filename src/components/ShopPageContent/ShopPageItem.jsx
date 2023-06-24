import { useNavigate } from "react-router-dom";

import classes from "./ShopPageItem.module.css";
import { toPrice } from "../../shared/utils";

function ShopPageItem({ prod }) {
  //chuyển giá tiền từ string thành number
  const price = toPrice(prod.price);

  const navigate = useNavigate();

  // chuyển sang trang detail khi click vào sản phẩm
  function HandleClick() {
    navigate(`/detail/${prod._id["$oid"]}`);
  }
  return (
    <div className={classes.ShopPageItem}>
      <div className={classes.Img}>
        <img src={prod.img1} onClick={HandleClick} alt="apple-item" />
      </div>
      <p className={classes.Name}>{prod.name}</p>
      <p className={classes.Price}>{price} VND</p>
    </div>
  );
}

export default ShopPageItem;
