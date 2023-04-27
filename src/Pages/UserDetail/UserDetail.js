import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import "./UserDetail.css";
//Components
import ItemCard from "../../components/ItemCard/ItemCard";
import Button from "@mui/material/Button";

//Firebase
import { db } from "../../Firebase/FireBaseConfig";
import {
  collection,
  query,
  getDocs,
  where,
  documentId,
} from "firebase/firestore";

//Context
import { CartContext } from "../../Context/CartContext";

const UserDetail = () => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((current) => {
      const wasItemFound = current.find((item) => item.id === id);
      if (wasItemFound) {
        return current.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...current, { id, quantity: 1, ...product }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((current) => {
      if (current.find((item) => item.id === id )?.quantity === 1) {
        return current.filter ((item) => item.id !== id)
      } else {
        return current.map((item) => {
          if(item.id === id){
            return {...item, quantity: item.quantity - 1}
          } else {
            return item
          }
        })
      }

    })
  }




  const [product, setProduct] = useState({});

  let { id } = useParams();

  useEffect(() => {
    const q = query(collection(db, "items"), where(documentId(), "==", id));
    const getItem = async () => {
      const querySnapshot = await getDocs(q);
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProduct(docs[0]);
    };
    getItem();
    
  }, [id]);
  

  return (
    <div className="detail-product">
      <h1>Detalles de producto</h1>
      <ItemCard data={product} />
      <Button variant="contained" color="success" onClick={() => addToCart()}>
        Añadir al carrito
      </Button>
      <Button variant="contained" color="error" onClick={() => removeItem(id)}>
        Eliminar del carrito
      </Button>
    </div>
  );
};

export default UserDetail;
