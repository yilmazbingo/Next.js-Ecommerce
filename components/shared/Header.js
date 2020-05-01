import React from "react";
import Logo from "../../assets/crown.svg";
// import { auth } from "../../firebase/firebase.utils";
// import { connect } from "react-redux";
import CartIcon from "../../assets/shopping-bag.svg";
// import CartDropdown from "../cart-dropdown/cart-dropdown.component";
// import { createStructuredSelector } from "reselect";
// import { selectCartHidden } from "../../redux/cart/cart.selectors";
// import { selectCurrentUser } from "../../redux/user/user.selector";

import Link from "next/link";
const Header = (props) => (
  <div className="header">
    <Link href="/home" passHref>
      <a className="logo-container">
        <Logo className="logo" />
      </a>
    </Link>
    <div className="options">
      <Link href="/shop">
        <a className="option"> SHOP</a>
      </Link>
      {"  "}
      <Link href="/contact">
        <a className="option">CONTACT</a>
      </Link>
      <CartIcon className="cart" />
    </div>
  </div>
);

//state.user will give us user:userReducer and from here access to currentUser
// const mapStateToProps = state => ({
//   currentUser: state.user.currentUser,
//   currentToggle:state.cart.hidden
// });

//--------DESTRUCTURING ABOVE CODE------
// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden
// });

//if we had 5 6 of those, it would repetitive
// const mapStateToProps = (state) => ({
//   currentUser:selectCurrentUser(state),
//   hidden:selectCartHidden(state)
// });

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   hidden: selectCartHidden,
// });

export default Header;

// {currentUser ? (
//   <div className="option" onClick={() => auth.signOut()}>
//     SIGN OUT
//   </div>
// ) : (
//   <Link className="option" to="/signin">
//     SIGN IN
//   </Link>
// )}
