import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import PaperCart from "../../components/PaperCart/PaperCart";
import MessageSuccess from "../../components/MessageSuccess/MessageSuccess";
import {Button, TextField} from "@mui/material";
import "./cartStyles.css";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../../Firebase/FireBaseConfig"



const initialState = {
  name: "",
  lastName: "",
  city: ""
};

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const id = cart.id;

const [values, setValues] = useState(initialState);

// Este estado está destinado a guardar el id de la compra
const [purchaseID, setPurchaseID] = useState("");

const onChange = (e) => {
  const {value, name} = e.target
  setValues ({...values, [name]: value, cart})
};

const onSubmit = async (e) => {
  e.preventDefault()
  const docRef = await addDoc(collection(db, "purchases"),{
    values,
  })
  setPurchaseID(docRef.id);
  setValues(initialState);
}

  const totalPrice = cart.reduce(
    (total, current) => total + current.quantity * current.price,
    0
  );

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };
  getQuantityById(id);
  
  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <div>
          <h3>Carrito Vacio</h3>
        </div>
      ) : (
        cart.map((item) => (
          <div className="row-cart" key={item.id}>
            <PaperCart data={item} />
            <h3>Cantidad:</h3> {getQuantityById(item.id)}
            <Button
              variant="outlined"
              color="success"
              onClick={() => {
                const updatedCart = cart.map((cartItem) => {
                  if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                  }
                  return cartItem;
                });
                setCart(updatedCart);
              }}
            >
              Añadir mas
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                const updatedCart = cart
                  .map((cartItem) => {
                    if (cartItem.id === item.id) {
                      return { ...cartItem, quantity: cartItem.quantity - 1 };
                    }
                    return cartItem;
                  })
                  .filter((cartItem) => cartItem.quantity > 0); // remove items with 0 quantity
                setCart(updatedCart);
              }}
            >
              Remover item
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                const updatedCart = cart.filter(
                  (cartItem) => cartItem.id !== item.id
                );
                setCart(updatedCart);
              }}
            >
              Vaciar item
            </Button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div >
          <h1>Total: {totalPrice}</h1>
          <div>
          <form className="container-form" onSubmit={onSubmit}>
        <TextField
          placeholder="Nombre"
          style={{ margin: 10, width: 400 }}
          name="name"
          value={values.name}
          onChange={onChange}
        />
        <TextField
          placeholder="Apellido"
          style={{ margin: 10, width: 400 }}
          name="lastName"
          value={values.lastName}
          onChange={onChange}
        />
        <TextField
          placeholder="Ciudad"
          style={{ margin: 10, width: 400 }}
          name="city"
          value={values.city}
          onChange={onChange}
        />
        <Button variant="contained" className="btn-send" type="submit">
          Enviar
        </Button>
      </form>
      {purchaseID.length ? <MessageSuccess purchaseID={purchaseID} /> : null}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
