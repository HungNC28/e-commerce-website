import { useState, useEffect } from "react";
import ShopPageItem from "./ShopPageItem";
import classes from "./ShopPageList.module.css";
import { useSelector } from "react-redux";

function ShopPageList() {
  const category = useSelector((state) => state.category.category);
  const [products, setProducts] = useState([]);

  // lấy danh sách từ api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await respone.json();
        // click vào all hiển thị tất cả sản phẩm
        if (category === "all") setProducts([...data]);
        else {
          // click vào từng nav hiển thị sản phẩm theo category
          const dataCate = data.filter((item) => item.category === category);
          setProducts([...dataCate]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [category]);

  return (
    <>
      <div className={classes.ShopPageList}>
        {/* thông báo nếu không có sản phẩm */}
        {products.length === 0 && <h2>No Products!</h2>}
        {/* map để lấy thông tin từng prod */}
        {products.map((prod) => (
          <ShopPageItem key={prod._id["$oid"]} prod={prod} />
        ))}
      </div>
    </>
  );
}
export default ShopPageList;
