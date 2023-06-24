import { useState } from "react";
import classes from "./ProductItem.module.css";
import { toPrice } from "../../shared/utils";

import Popup from "./Popup";

function ProductItem({ prod }) {
  const [showPopup, setShowPopup] = useState(false);
  //chuyển giá tiền từ string thành number
  const price = toPrice(prod.price);

  function handleShowPopup() {
    setShowPopup(true);
  }

  // Click vào nút X để ẩn Popup
  function handleHidePopup() {
    setShowPopup(false);
  }

  // nhấn ESC để ẩn Popup
  window.onkeydown = function (e) {
    if (e.keyCode === 27) {
      setShowPopup(false);
    }
  };
  return (
    <>
      <div className={classes.ProductItem}>
        <img src={prod.img1} onClick={handleShowPopup} alt="apple-item" />
        <p className={classes.Name}>{prod.name}</p>
        <p className={classes.Price}>{price} VND</p>
      </div>
      {showPopup && <Popup prod={prod} hidePopup={handleHidePopup} />}
    </>
  );
}

export default ProductItem;
