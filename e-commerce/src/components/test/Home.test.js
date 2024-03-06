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
    const para1 = screen.getByText("Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.");
    expect (para1).toBeInTheDocument();
    const para2 = screen.getByText("Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.");
      expect(para2).toBeInTheDocument();
})
}) 