import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../features/cart/cartSlice";

const AddToCart = () => {
  const allCartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  console.log("allcartitems: ", allCartItems);

  const totalCartItems = allCartItems.reduce((sum, eachCartItem) => {
    return sum + eachCartItem.quantity * eachCartItem.price;
  }, 0);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            navigate("/");
          }}
          className="text-center text-2xl font-extrabold text-red-600 p-4 m-4 cursor-pointer hover:text-red-800"
        >
          🔙 Continue Shopping
        </button>
      </div>

      {allCartItems.length == 0 ? (
        <h1>Cart is Empty...</h1>
      ) : (
        <div className="flex justify-center items-center flex-col gap-4 p-4">
          {allCartItems.map((eachCartItem) => {
            return (
              <div className="w-100 flex justify-center items-center flex-col border border-b-black gap-2 p-4">
                <img
                  width={200}
                  height={100}
                  src={eachCartItem.images[0]}
                  alt="product image"
                />
                <h1>Title: {eachCartItem.title}</h1>

                <h1 className="font-bold">Category: {eachCartItem.category}</h1>
                <h1 className="text-red-600 font-bold">
                  Price: {eachCartItem.price}
                </h1>
                <h1 className="text-red-600 font-bold">
                  Quantity: {eachCartItem.quantity}
                </h1>

                <p className="text-red-600 text-xl font-bold">
                  SubTotal Amount to be Pay:{" "}
                  {(eachCartItem.quantity * eachCartItem.price).toFixed(2)}
                </p>
                <button
                  onClick={() => dispatch(removeFromCart(eachCartItem.id))}
                  className="text-[16px] border border-red-600 bg-red-500 text-white rounded-xl p-2 hover:bg-red-700 cursor-pointer"
                >
                  Remove from Cart
                </button>
              </div>
            );
          })}
          <p className="text-2xl font-bold">
            Grand Total Amount to be pay:{totalCartItems.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
};

export default AddToCart;