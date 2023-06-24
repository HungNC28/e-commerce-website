import classes from "./ShopPageContent.module.css";

import ShopPageNav from "./ShopPageNav";
import ShopPageList from "./ShopPageList";

function ShopPageContent() {
  return (
    <div>
      <div className={classes.Header}>
        <p className={classes.Name1}>SHOP</p>
        <p className={classes.Name2}>SHOP</p>
      </div>
      <div className={classes.ShopPageContainer}>
        <ShopPageNav />
        <div className={classes.ContentRight}>
          <form>
            <input placeholder="Enter Search Here!"></input>
            <select>
              <option>Default sorting</option>
            </select>
          </form>
          <ShopPageList />
        </div>
      </div>
    </div>
  );
}

export default ShopPageContent;
