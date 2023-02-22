import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";

import blackShoesImg from "../assets/blackshoes.jpg";
import macBookImg from "../assets/mackbook.jpg";
import iphone from "../assets/iphone.jpg";
import Gs22ultra from "../assets/Gs22ultra.png";
import watch from "../assets/watch.png";
import tshirt from "../assets/tshirt.jfif";
import jeans from "../assets/jeans.jfif";
import shirt from "../assets/shirt.jfif";
import pants from "../assets/pants.jfif";
import realmec35 from "../assets/realmec35.jfif";
import mobilecover from "../assets/mobilecover.jfif";

const Home = () => {
  const productList = [
    {
      name: "MacBook",
      price: 12000,
      imgSrc: macBookImg,
      id: "mackbook",
    },
    {
      name: "iphone X",
      price: 5800,
      imgSrc: iphone,
      id: "iphone",
    },
    {
      name: "Samsung Galaxy S22 Ultra",
      price: 19990,
      imgSrc: Gs22ultra,
      id: "ultra",
    },
    {
      name: "Black Shoes",
      price: 490,
      imgSrc: blackShoesImg,
      id: "blackshoes",
    },
    {
      name: "BOAT smart watch",
      price: 725,
      imgSrc: watch,
      id: "watch",
    },
    {
      name: "Shirt",
      price: 250,
      imgSrc: shirt,
      id: "newshirt",
    },
    {
      name: "Pants",
      price: 250,
      imgSrc: pants,
      id: "pants",
    },
    {
      name: "Slim fit jeans",
      price: 350,
      imgSrc: jeans,
      id: "jeans",
    },
    {
      name: "t-shirt",
      price: 250,
      imgSrc: tshirt,
      id: "shirt",
    },
    {
      name: "Mobile cover",
      price: 150,
      imgSrc: mobilecover,
      id: "cover",
    },
    {
      name: "realme C35",
      price: 6500,
      imgSrc: realmec35,
      id: "realme",
    },
  ];
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Added To Cart");
  };

  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, imgSrc, handler }) => (
  <div className="productCard">
    <img src={imgSrc} alt={name} />
    <p>{name}</p>
    <h4>${price}</h4>
    <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
      Add to Cart
    </button>
  </div>
);

export default Home;
