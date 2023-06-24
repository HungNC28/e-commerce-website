import classes from "./Categories.module.css";
import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";

function Categories() {
  const navigate = useNavigate();
  // chuyển sang trang ShopPage khi click vào ảnh
  function ClickHandler() {
    navigate("/shop");
  }
  return (
    <Card>
      <div className={classes.Categories}>
        <p className={classes.CategoriesInfor}>CAREFULLY CREATED COLLECTIONS</p>
        <p className={classes.CategoriesTitle}>BROWSE OUR CATEGORIES</p>
      </div>
      <div className={classes.Image}>
        <div className={classes.Img}>
          <img onClick={ClickHandler} src="/image/product_1.png" alt="iphone" />
        </div>
        <div className={classes.Img}>
          <img onClick={ClickHandler} src="/image/product_2.png" alt="mac" />
        </div>
      </div>
      <div className={classes.Image}>
        <div className={classes.Img}>
          <img onClick={ClickHandler} src="/image/product_3.png" alt="ipad" />
        </div>
        <div className={classes.Img}>
          <img onClick={ClickHandler} src="/image/product_4.png" alt="watch" />
        </div>
        <div className={classes.Img}>
          <img
            onClick={ClickHandler}
            src="/image/product_5.png"
            alt="airpods"
          />
        </div>
      </div>
    </Card>
  );
}

export default Categories;
