import classes from "./ShopPageDetail.module.css";
import Card from "../UI/Card";
import { useDispatch, useSelector } from "react-redux";
import { listCartActions } from "../../redux/reducer/cart";
import { useState, useEffect } from "react";
import ShopPageItem from "./ShopPageItem";
import { getEmailCurrentUser } from "../../shared/utils";
import { toPrice } from "../../shared/utils";

function ShopPageDetail({ prod }) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const [relatedProd, setRelatedProd] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const price = toPrice(prod.price);

  useEffect(() => {
    if (!prod.category) return;
    const fetchData = async () => {
      try {
        const respone = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await respone.json();

        const relatedData = data
          // filter để lấy các Prod có cùng category
          .filter((item) => item.category === prod.category)
          // filter để lấy các Related Prod trừ sản phẩm đã hiển thị
          .filter((item) => item._id["$oid"] !== prod._id["$oid"]);

        setRelatedProd([...relatedData]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [prod.category]);

  // Hàm thêm sản phẩm vào cart
  function addToCart(e, prod) {
    e.preventDefault();
    const id = prod._id["$oid"];
    const email = getEmailCurrentUser();
    const cartItem = cart.find((x) => x._id["$oid"] == id && x.email === email);
    if (cartItem) {
      dispatch(
        listCartActions.updateCart({
          id,
          quantity: parseInt(quantity) + parseInt(cartItem.quantity),
        })
      );
      alert("Add to cart successfully!");
      return;
    }

    dispatch(listCartActions.addCart({ ...prod, email, quantity }));
    alert("Add to cart successfully!");
  }

  return (
    <Card>
      <div className={classes.ShopPageDetail}>
        <div className={classes.ListProd}>
          <img src={prod.img1} alt="product" />
          <img src={prod.img2} alt="product" />
          <img src={prod.img3} alt="product" />
          <img src={prod.img4} alt="product" />
        </div>
        <div className={classes.Prod}>
          <img src={prod.img1} alt="product" />
        </div>
        <div className={classes.ProdInfor}>
          <p className={classes.ProdName}>{prod.name}</p>
          <p className={classes.ProdPrice}>{price} VND</p>
          <p className={classes.DescInfor}>{prod.short_desc}</p>
          <p className={classes.ategory}>CATEGORY: {prod.category}</p>
          <form>
            <input
              className={classes.InputDetail}
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button
              className={classes.BtnDetail}
              onClick={(e) => addToCart(e, prod)}
            >
              Add to cart
            </button>
          </form>
        </div>
      </div>
      <div className={classes.ProdDesc}>
        <p className={classes.Desc}>DESCRIPTION</p>
        <p className={classes.ProdTitle}>PRODUCT DESCRIPTION</p>
        <p className={classes.DescInfor}>{prod.long_desc}</p>
      </div>
      <p className={classes.ProdTitle}>RELATED PRODUCTS</p>
      <div className={classes.RelatedProd}>
        {/* map để lấy thông tin từng prod */}
        {relatedProd.map((prod) => (
          <ShopPageItem key={prod._id["$oid"]} prod={prod} />
        ))}
      </div>
    </Card>
  );
}

export default ShopPageDetail;
