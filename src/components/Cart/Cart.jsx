import Card from "../UI/Card";
import classes from "./Cart.module.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listCartActions } from "../../redux/reducer/cart";
import { CalculatePrice } from "../../shared/utils";
import { toPrice } from "../../shared/utils";
import { getDataLocal } from "../../shared/utils";
import { useMemo } from "react";
import { getEmailCurrentUser } from "../../shared/utils";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  // render Cart hiện theo Email
  const currentData = useMemo(() => {
    return cart.filter((d) => d.email === getEmailCurrentUser());
  }, [cart]);

  // Hàm delete
  function deleteHandle(prod) {
    console.log("DELETE", prod);
    dispatch(listCartActions.deleteCart(prod));
  }

  // Hàm update Quantity
  function changeQuantity(prod, quantity) {
    const id = prod._id["$oid"];
    dispatch(listCartActions.updateCart({ id, quantity }));
  }

  return (
    <Card>
      <div>
        <div className={classes.Header}>
          <p className={classes.Name1}>CART</p>
          <p className={classes.Name2}>CART</p>
        </div>
        <p className={classes.CartTitle}>SHOPPING CART</p>
        <div className={classes.ShoppingCartContent}>
          <div>
            <div>
              <div className={classes.ShoppingCart}>
                <p className={classes.CartItem}>IMAGE</p>
                <p className={classes.CartItem}>PRODUCT</p>
                <p className={classes.CartItem}>PRICE</p>
                <p className={classes.CartItem}>QUANTITY</p>
                <p className={classes.CartItem}>TOTAL</p>
                <p className={classes.CartItem}>REMOVE</p>
              </div>
              {currentData.map((prod, index) => (
                <div key={index} className={classes.CartProd}>
                  <div className={classes.CartImg}>
                    <img src={prod.img1} alt="product" />
                  </div>
                  <p className={classes.Name}>{prod.name}</p>
                  <p className={classes.Price}>{toPrice(prod.price)} VND</p>
                  <input
                    type="number"
                    value={prod.quantity}
                    onChange={(e) => changeQuantity(prod, e.target.value)}
                  />
                  <p className={classes.Price}>
                    {toPrice(prod.price * prod.quantity)} VND
                  </p>
                  <button
                    className={classes.btnDelete}
                    onClick={(e) => deleteHandle(prod)}
                  >
                    <DeleteIcon sx={{ fontSize: 20 }} />
                  </button>
                </div>
              ))}
            </div>
            <div className={classes.CartBtn}>
              <button
                className={classes.btnContinue}
                // chuyển sang trang ShopPage khi click vào nút "Continue Shopping"
                onClick={() => {
                  navigate("/shop");
                }}
              >
                <ArrowBackIcon sx={{ fontSize: 20 }} /> Continue shopping
              </button>
              <button
                className={classes.btnProceed}
                // chuyển sang trang CheckoutPage khi click vào nút "Proceed to Checkout"
                onClick={() => {
                  navigate("/checkout");
                }}
              >
                Proceed to checkout <ArrowForwardIcon sx={{ fontSize: 20 }} />
              </button>
            </div>
          </div>
          <div className={classes.CartTotal}>
            <p className={classes.CartTitle}>CART TOTAL</p>
            <div className={classes.Subtotal}>
              <p>SUBTOTAL</p>
              <p className={classes.SubPrice}>
                {toPrice(CalculatePrice(currentData))} VND
              </p>
            </div>
            <div className={classes.Total}>
              <p>TOTAL</p>
              <p className={classes.TotalPrice}>
                {toPrice(CalculatePrice(currentData))} VND
              </p>
            </div>
            <input
              className={classes.CouponInput}
              placeholder="Enter your coupon"
            />
            <button className={classes.btnCoupon}>
              <CardGiftcardIcon sx={{ fontSize: 20 }} /> Apply coupon
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Cart;
