import { useState, useEffect } from "react";

import ProductItem from "./ProductItem";

import Card from "../UI/Card";

import classes from "./ProductsList.module.css";

function ProductsList() {
  const [products, setProducts] = useState([]);

  // lấy danh sách từ api
  useEffect(() => {
    const fetchData = async () => {
      try {
        const respone = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await respone.json();

        //Chỉ hiển thị tối đa 8 phần tử đầu tiên của danh sách trả về từ API
        const sliceData = data.slice(0, 8);

        setProducts(sliceData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <Card>
      <p className={classes.ProductsListTitle1}>MADE THE HARD WAY</p>
      <div className={classes.ProductsListTitle2}>TOP TREND PRODUCTS</div>
      {/* map để lấy thông tin từng prod */}
      <div className={classes.ProductsList}>
        {products.map((prod) => (
          <ProductItem key={prod._id["$oid"]} prod={prod} />
        ))}
      </div>
    </Card>
  );
}

export default ProductsList;
