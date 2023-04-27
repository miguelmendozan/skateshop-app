import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCard from "../../components/ItemCard/ItemCard";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const id = cart.id;

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
          <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", }} key={item.id}>
            <ItemCard data={item} />
              <h3>Quantity:</h3> {getQuantityById(item.id)}
            <button
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
            </button>
            <button
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
            </button>
            <button
              onClick={() => {
                const updatedCart = cart.filter(
                  (cartItem) => cartItem.id !== item.id
                );
                setCart(updatedCart);
              }}
            >
              Vaciar item
            </button>
            <hr></hr>
          </div>
        ))
      )}
    </div>
  );
};

//   return (
//     <div>
//         <h1> Cart </h1>
//         {cart.map((item) => (
//           <div key={item.id}>

//             {
//               quantityPerItem === false ?(
//                 <div>
//                   <h3>Carrito Vacio</h3>
//                 </div>
//               ) :(
//                 <button>add more</button>
//               )
//             }
//             {getQuantityById(item.id) > 0 && <div> <ItemCard data={item}/> <h3>Quantity:</h3> {getQuantityById(item.id)}
//             <button>remover item</button>
//             </div>}

//           </div>

//         ))}

//     </div>
//   )
// }

export default Cart;
