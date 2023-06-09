import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./skates.css";
//Components
import ItemCard from "../../components/ItemCard/ItemCard";


//Firebase
import { db } from "../../Firebase/FireBaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

const Skateboarding = () => {
  const [categorySkate, setCategorySkate] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      const q = query(
        collection(db, "items"),
        where("category", "==", "skate")
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setCategorySkate(docs);
    };
    getCategory();
  });
  return (
    <div className="skate-item">
      <h1>Skateboarding</h1>
      {categorySkate.map((category) => {
        return (
          <Link to={`/product-detail/${category.id}`}>
            <ItemCard data={category} key={category.id} />
          </Link>
        );
      })}
    </div>
  );
};

export default Skateboarding;
