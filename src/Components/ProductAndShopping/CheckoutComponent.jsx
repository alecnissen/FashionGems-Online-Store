import Header from '../HomePage/Header';
import Footer from '../HomePage/Footer';
import gemIcon from '../../../Icons/gem-icon-checkout-component.png';
import FashionGemsAppComponent from './FashionGemsAppComponent';
import CheckoutForm from './Checkoutform';

export default function CheckoutComponent({
  cartItems,
  setCartItems,
  numberOfCartItems,
  itemQuantity,
  isOpen,
  setIsOpen,
}) {
  let total = 0;

  function handleDelete(item) {
    setCartItems(cartItems.filter((selectedItem) => selectedItem.id !== item.id));
  }

  function changeQuantityIncrement(item) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.title === item.title) {
        return { ...cartItem, quantity: cartItem.quantity + 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  }

  function changeQuantityDecrement(item) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.title === item.title && cartItem.quantity > 0) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  }

  return (
    <>
      <Header numberOfCartItems={numberOfCartItems} isOpen={isOpen} setIsOpen={setIsOpen}></Header>

      <div className="checkout-component-wrapper">
        <CheckoutForm />

        <div className="checkout-component-right-side-wrapper">
          <div className="checkout-component-cart-items-container">
            <div className="checkout-component-right-side-icon-container">
              <img src={gemIcon} className="gem-icon"></img>
              <h1>FashionGems </h1>
            </div>

            <div className="product-container-styles">
              <div className="my-cart-items-container">
                <h6 className="my-cart-header-text-styles">My Cart</h6>
                <h6 className="number-of-cart-items-text-styles">{cartItems.length} items</h6>
              </div>
              {cartItems.map((item) => {
                let productPrice = item.price * item.quantity;
                total += productPrice;

                return (
                  <>
                    <img src={item.image} className="product-img-styles"></img>
                    <h4>Quantity: {item.quantity}</h4>

                    <div className="increment-decrement-remove-btn-content-container">
                      <button
                        data-testid="increment-btn-checkout"
                        onClick={() => {
                          console.log(itemQuantity);
                          changeQuantityIncrement(item);
                        }}
                      >
                        +
                      </button>
                      <div className="item-quantity-div-styles">{item.quantity}</div>
                      <button
                        onClick={() => {
                          changeQuantityDecrement(item);
                        }}
                      >
                        -
                      </button>

                      <div className="remove-btn-container"></div>
                    </div>

                    <button
                      onClick={() => {
                        handleDelete(item);
                      }}
                      className="remove-btn-styles"
                    >
                      Remove
                    </button>

                    <h4>Item Price: ${item.price}</h4>
                    <h4 data-testid="total-price">Total: ${productPrice}</h4>
                  </>
                );
              })}
            </div>
          </div>

          <div className="grand-total-container">
            <h3>Grand Total: ${total.toFixed(2)}</h3>
          </div>
        </div>
      </div>

      <FashionGemsAppComponent></FashionGemsAppComponent>
      <Footer></Footer>
    </>
  );
}
