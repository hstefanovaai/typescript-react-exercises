import { useCartSelect } from "../store/hooks";
import { useCartDispatch } from "../store/hooks.ts";
import {
  addToCart,
  removeFromCart,
  type CartItem,
} from "../store/cart-slice.ts";

export default function CartItems() {
  const dispatch = useCartDispatch();
  const cartItems = useCartSelect((state) => state.cart.items);

  function handleRemoveFromCart(id: string) {
    dispatch(removeFromCart(id));
  }

  function handleAddToCart(item: CartItem) {
    dispatch(addToCart({ id: item.id, title: item.title, price: item.price }));
  }

  const totalPrice = cartItems.reduce((sum, item) => item.price*item.quantity + sum, 0);
  const formattedTotalPrice = totalPrice.toFixed(2);
  return (
    <div id="cart">
      {cartItems.length === 0 && <p>No items in cart!</p>}

      {cartItems.length > 0 && (
        <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p id="cart-total-price">
        Cart Total: <strong>${formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
