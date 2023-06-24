import classes from "./Checkout.module.css";
import Card from "../UI/Card";
import { useSelector } from "react-redux";
import { CalculatePrice } from "../../shared/utils";
import { toPrice } from "../../shared/utils";
import { getEmailCurrentUser } from "../../shared/utils";
import { useMemo } from "react";

function Checkout() {
  const cart = useSelector((state) => state.cart.cart);

  // filter để lấy ra các sản phẩm theo Email
  const currentData = useMemo(() => {
    return cart.filter((d) => d.email === getEmailCurrentUser());
  }, [cart]);

  return (
    <Card>
      <div className={classes.Header}>
        <p className={classes.Name1}>CKECKOUT</p>
        <div className={classes.Name2}>
          <p>HOME / CART /</p>
          <p className={classes.Name2P}>CKECKOUT</p>
        </div>
      </div>
      <p className={classes.CheckoutTitle}>BILLING DETAILS</p>
      <div className={classes.CheckoutContent}>
        <div>
          <form className={classes.formCheckout}>
            <label>FULL NAME:</label>
            <input type="text" placeholder="Enter Your Full Name Here!" />
            <label>EMAIL:</label>
            <input type="email" placeholder="Enter Your Email Here!" />
            <label>PHONE NUMBER:</label>
            <input type="phone" placeholder="Enter Your Phone Number Here!" />
            <label>ADDRESS</label>
            <input type="address" placeholder="Enter Your Address Here!" />
            <button className={classes.btnPlace}>Place order</button>
          </form>
        </div>

        <div className={classes.CheckoutOrder}>
          <p className={classes.CheckoutTitle}>YOUR ORDER</p>
          {currentData.map((prod) => (
            <div key={prod._id["$oid"]} className={classes.CheckoutItem}>
              <p>{prod.name}</p>
              <p className={classes.SubPrice}>
                {toPrice(prod.price)} VND x {prod.quantity}
              </p>
            </div>
          ))}
          <div className={classes.CheckoutTotal}>
            <p>TOTAL</p>
            <p>{toPrice(CalculatePrice(currentData))} VND</p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Checkout;
