import React from "react";
// import CustomButton from "../custom-button/custom-bottom.component";
// import { connect } from "react-redux";
// import { addItem } from "../../redux/cart/cart.actions";

//we need to pass "item" to the addItem function
//so, we need to tweak our code in CollectionPreview
const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      {/* this will add the item to the state.cartItems */}
    </div>
  );
};
//we are changing button css based on prop that we pass onto the component

//we create a new function "addItem" and pass it as prop

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

export default CollectionItem;

// <CustomButton onClick={() => addItem(item)} inverted>

// Add to Cart
// </CustomButton>
