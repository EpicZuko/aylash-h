// Utility to load cart from localStorage
export const loadCartFromLocalStorage = () => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return []; // Return an empty array if not on the client side
  };
  
  // Utility to save cart to localStorage
  export const saveCartToLocalStorage = (cart) => {
    console.log(cart)
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  };
  