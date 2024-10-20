import React, { useState } from 'react';
import CartItem from './CartItem';
import Cart from './Cart';
import Footer from "./Footer";
import './App.css';

  const ShoppingApp = () => {
    const items = [
      { name: 'Sneakers', price: 50000, imageUrl: '/images/sneaker.jpg' },
    { name: 'Wrist Watch', price: 15000, imageUrl: '/images/Wrist-watch.jpg' },
    { name: 'T-shirt', price: 20000, imageUrl: '/images/T-shirt.png' }
    ];
  
    const [cartItems, setCartItems] = useState([]);
  
    const handleAddToCart = (item) => {
      const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
      if (existingItem) {
        setCartItems(cartItems.map(cartItem =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ));
      } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      }
    };
     
    const calculateTotal = () => {
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    
    };
  
    return (
      <div className="flex justify-center items-center min-h-screen">
      <div className=" shopping-app container drop-shadow-2xl rounded shadow-black shadow-2xl my-20 w-1/2 h-1/4git p-3">
        <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
        <div className="items-list grid grid-cols-1 md:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <CartItem key={index} item={item} onAddToCart={handleAddToCart} />          
          ))}
        </div>
        <Cart cartItems={cartItems} total={calculateTotal()} /> 
        <Footer/>    
      </div>
      </div>
    );
  };
  
export default ShoppingApp


/* Documentation of debugging Process

INITIAL INSPECTION:
The application was run and the its behavior was observed.
The "Add to Cart" button for an item was clicked multiple times to see if the quantity updates correctly in the cart.

IDENTIFYING ISSUES:
Misalignment of Elements: I Checked the UI for any misalignment issues that might occur when items are added to the cart. I checked that images, item names, prices, and buttons are visually appealing and properly aligned.
Image Loading: I checked that images are displayed correctly. If images do not appear, verify that the image paths are correct and that the images are in the expected directory (i.e., public/images/).
Quantity Update Logic: Confirm that the quantity of items in the cart updates correctly when the same item is added multiple times.

Utilizing Developer Tools:
React Developer Tools: Open the React Developer Tools in your browser.
Inspect the components tree to see if the cartItems state is updating correctly when an item is added.
Check the props passed to the Cart and CartItem components to ensure they contain the expected values (including the updated quantity).
Browser Console: Use the console to check for any warnings or errors.
Look for any console logs or error messages that might indicate issues, especially when clicking the "Add to Cart" button.

Debugging Steps:
Check State Updates:
In the handleAddToCart function, use console logs to inspect the state before and after updates. 
E.g.
console.log('Before:', cartItems);
setCartItems(updatedCartItems);
console.log('After:', updatedCartItems);

Verify Cart Display: Ensure the Cart component is rendering the cartItems with the correct quantity and total price. Add console logs in the Cart component to confirm the values received as props:
E.g.
console.log('Cart Items:', cartItems);
console.log('Total:', total);

Testing:

After making any changes, rerun the application and retest the functionality. Ensure that adding items to the cart works as expected.
Test edge cases, such as:
Adding the same item multiple times.
Adding different items to ensure the cart updates correctly.

Final Review:
Review the code for best practices, such as code organization, naming conventions, and comments for clarity.
Confirm that the application is responsive and works well on different screen sizes.
*/