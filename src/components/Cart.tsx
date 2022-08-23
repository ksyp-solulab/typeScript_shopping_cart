import { Wrapper } from "./Cart.style";
import { CartItemType } from "../App";
import CartItem from "./CartItem";
type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart = (props: Props) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {props.cartItems.length === 0 && <p>No Items In Cart</p>}
      {props.cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart