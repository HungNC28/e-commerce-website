import Card from "../UI/Card";

import classes from "./Information.module.css";

function Information() {
  return (
    <Card>
      <div className={classes.Infor1}>
        <div className={classes.Infor1Item}>
          <div className={classes.Infor1ItemTitle}>FREE SHIPPING</div>
          <p>Free shipping worlwide</p>
        </div>
        <div className={classes.Infor1Item}>
          <div className={classes.Infor1ItemTitle}>24 X 7 SERVICE</div>
          <p>Free shipping worlwide</p>
        </div>
        <div className={classes.Infor1Item}>
          <div className={classes.Infor1ItemTitle}>FESTIVAL OFFER</div>
          <p>Free shipping worlwide</p>
        </div>
      </div>
      <div className={classes.Infor2}>
        <div className={classes.Infor2Item}>
          <div className={classes.Infor2ItemTitle}>LET'S BE FRIENDS!</div>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>
        <div className={classes.Infor2ItemInput}>
          <input placeholder="Enter your email address"></input>
          <button>Subscribe</button>
        </div>
      </div>
    </Card>
  );
}

export default Information;
