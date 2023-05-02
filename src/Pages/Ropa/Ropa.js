import { useEffect, useState } from "react";
import "./ropa.css"
import { Link } from "react-router-dom";
//Firebase
import { db } from "../../Firebase/FireBaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
//Components 
import ItemCard from "../../components/ItemCard/ItemCard";
const Ropa = () => {
  const [categoryRopa, setCategoryRopa] = useState([])

  useEffect(() => {
    const getCategory = async () => {
      const q = query(
        collection(db, "items"),
        where("category", "==", "ropa")
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setCategoryRopa(docs);
    };
    getCategory();
  })
  return (
    <div className="ropa-item">
      <h1>Ropa</h1>
      {categoryRopa.map((category) => {
        return <Link to={`/product-detail/${category.id}`}>
            <ItemCard data={category} key={category.id}/>
        </Link>
        
      })}
    </div>
  )
}

export default Ropa