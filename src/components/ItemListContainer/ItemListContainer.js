import { useEffect, useState } from "react";
import "./ItemListContainer.css";
import ItemCard from "../ItemCard/ItemCard";
import { Link } from "react-router-dom";

//Firebase
import { db } from "../../Firebase/FireBaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const q = query(collection(db, "items"));
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getItems = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    };
    getItems();
  }, []);

  return (
    <div className="ItemList">
      {products.map((product) => {
        return (
          <div className="itemCard" key={product.id}>
            <Link to={`/product-detail/${product.id}`}>
              <ItemCard data={product} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ItemListContainer;
