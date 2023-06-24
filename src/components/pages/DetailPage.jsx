import { useCallback, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import ShopPageDetail from "../ShopPageContent/ShopPageDetail";

function DetailPage() {
  const [prod, setProd] = useState({});
  const params = useParams();

  const fetchProd = useCallback(async function () {
    const response = await fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    );
    if (!response.ok) {
      throw json(
        { message: "Could not fetch details for selected product." },
        { status: 500 }
      );
    }
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
      if (params.productId === data[i]._id["$oid"]) {
        setProd(data[i]);
      }
    }
  }, []);

  useEffect(() => {
    fetchProd();
  }, [fetchProd]);

  return <ShopPageDetail prod={prod} />;
}

export default DetailPage;
