"use client"
import { CartItem, Product } from '@/types/types';
import React, { createContext, useEffect, useState } from 'react';


interface CartContextProps {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number, stock: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

export const CartContext = createContext<CartContextProps>({} as CartContextProps);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const item = prevCart.find(i => i.id === product.id);
      if (item) {
        if (item.quantity + quantity > product.stock) {
          alert('Exceeds available stock.');
          return prevCart;
        }
        return prevCart.map(i =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number, stock: number) => {
    if (quantity < 1 || quantity > stock) {
      alert('Invalid quantity.');
      return;
    }

    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
