import classes from "./Banner.module.css";

import Card from "../UI/Card";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  return (
    <Card>
      <div className={classes.Banner}>
        <div className={classes.BannerItem}>
          <p className={classes.BannerTitle}>NEW INSPIRATION 2020</p>
          <p className={classes.BannerSale}>20% OFF ON NEW SEASON</p>
          <button
            // chuyển sang trang ShopPage khi Click vào button
            onClick={() => {
              navigate("/shop");
            }}
          >
            Browse collections
          </button>
        </div>
      </div>
    </Card>
  );
}

export default Banner;
