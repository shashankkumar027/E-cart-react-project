import React from "react";
import { AiFillDelete } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const { cartItems, subTotal, tax, shipping, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const increment = (id) => {
    dispatch({
      type: "addToCart",
      payload: {id},
    });
      dispatch({ type: "calculatePrice" });
  };
  const decrement = (id) => {
    dispatch({
      type: "decrement",
      payload:  id ,
    });
    dispatch({ type: "calculatePrice" });
  };
  const deleteHandeler = (id) => {
    dispatch({
      type: "deleteFromCart",
      payload: id ,
    });
      dispatch({ type: "calculatePrice" });
  };

  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgSrc={i.imgSrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandeler={deleteHandeler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>Subtotoal: ${subTotal}</h2>
        <h2>Shipping: ${cartItems.length > 0 ? shipping : "0"}</h2>
        <h2>Tax: ${cartItems.length > 0 ?  tax  : "0"}</h2>
        <h2>Total: ${cartItems.length > 0 ?  total  : "0"}</h2>
      </aside>
    </div>
  );
};

const CartItem = ({
  imgSrc,
  name,
  price,
  qty,
  decrement,
  increment,
  deleteHandeler,
  id,
}) => (
  <div className="cartItem">
    <img src={imgSrc} alt={name} />
    <article>
      <h3>{name}</h3>
      <p>${price}</p>
    </article>
    <div>
      <button onClick={() => decrement(id)}>-</button>
      <p>{qty}</p>
      <button onClick={() => increment(id)}>+</button>
    </div>
    <AiFillDelete onClick={() => deleteHandeler(id)} />
  </div>
);

export default Cart;
