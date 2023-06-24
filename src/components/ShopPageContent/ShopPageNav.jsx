import classes from "./ShopPageNav.module.css";
import { useDispatch } from "react-redux";
import { cateActions } from "../../redux/reducer/category";
import { ShopPageNavData } from "../../shared/const";

function ShopPageNav() {
  const dispatch = useDispatch();
  // đổi value Category khi clik vào từng nav
  function handleChangeCate(cate) {
    if (!cate) return;
    dispatch(cateActions.changeCate(cate));
  }
  return (
    <div className={classes.ShopPageNav}>
      <ul>
        {/* map hiển thị từng nav */}
        {ShopPageNavData.map((nav, index) => (
          <li
            key={index}
            className={classes[nav.css]}
            onClick={(e) => handleChangeCate(nav.value)}
          >
            {nav.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopPageNav;
