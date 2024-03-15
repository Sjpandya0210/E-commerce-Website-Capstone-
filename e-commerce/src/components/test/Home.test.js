import React from 'react';
import Home from "../Home";
import store_img from "../../assets/store_home.jpg"
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
// Mock the image import
jest.mock('../../assets/store_home.jpg', () => ({ default: 'store_home.jpg' }));
describe ("Home Component", () => {
  test ("display the title", () => {
    render(<Home />);
    const title = screen.getByRole("heading", {
        name: "Welcome to E-store"
    });
    expect (title).toBeInTheDocument();
  }) 
  test ("display an image", () => {
    render(<Home />);
    const image = screen.getByAltText(
        "image of cart in a store"
    );
    expect (image).toBeInTheDocument();
})
test ("display the paragraph", () => {
    render(<Home />);
    const para1 = screen.getByText(" Welcome to our vibrant e-store, where shopping meets convenience and style!");
    expect (para1).toBeInTheDocument();
    const para2 = screen.getByText("Explore our exclusive deals, unbeatable discounts, and personalized recommendations, all customized just for you.");
      expect(para2).toBeInTheDocument();
})
}) 