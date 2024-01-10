import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Cart from './cart';

describe('Cart Component Tests', () => {
    const mockCart = [
        {
          id: 1,
          title: "Harry Potter y la piedra filosofal",
          author: "por J.K. Rowling",
          price: 299,
          img: "https://m.media-amazon.com/images/I/81pM4orRvFL._SL1500_.jpg",
          amount: 1,
        },
        {
          id: 2,
          title: "Percy Jackson El ladrón del rayo",
          author: "por Rick Riordan",
          price: 260,
          img: "https://m.media-amazon.com/images/I/91QVAkfs+-L._SL1500_.jpg",
          amount: 1,
        },
      ];

  it('renders products in cart', () => {
    render(<Cart cart={mockCart} setCart={() => {}} handleChange={() => {}} />);
    const productTitle = screen.getByText(mockCart[0].title);
    expect(productTitle).toBeInTheDocument();
  });
});