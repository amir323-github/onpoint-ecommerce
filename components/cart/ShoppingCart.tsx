// Core
import React from 'react';

// Style
import styles from '../../styles/ShoppingCart.module.css';

// Stores
import useStore from '../../store/useStore';

// Components
import CartItem from './CartItem';
import Link from 'next/link';

const ShoppingCart = () => {
  const cartItems = useStore((state) => state.items);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__title}>ShoppingCart</h1>
        {cartItems.length === 0 && <h4 className={styles.header__no_items}>No Items in Cart</h4>}
      </div>

      <div className={styles.cart}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />

        ))}

        
      </div>
   {cartItems.length===0?""
      
      : <div className=' flex items-center justify-center pb-4'>
      <Link  href={ {pathname:'/cashout'}} >
    <button className="bg-amber-400 font-bold py-2 px-4  pb-3 rounded " > Proceed to CheckOut</button>
    </Link>
    </div>
}
    </>
  );
};

export default ShoppingCart;
