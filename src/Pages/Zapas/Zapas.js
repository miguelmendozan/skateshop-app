import { useEffect, useState } from "react";
import "./zapas.css"
//Firebase
import { db } from "../../Firebase/FireBaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";

//components
import ItemCard from "../../components/ItemCard/ItemCard";

const Zapas = () => {
  const [categoryZapas, setCategoryZapas] = useState([])

  useEffect(() => {
    const getCategory = async () => {
      const q = query(
        collection(db, "items"),
        where("category", "==", "zapatos")
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setCategoryZapas(docs);
    };
    getCategory();
  })
  return (
    <div className="zapato-item">
      <h1>Zapas</h1>
      {categoryZapas.map((category) => {
        return <ItemCard data={category} key={category.id} />
      })}
      </div>
  )
}

export default Zapas