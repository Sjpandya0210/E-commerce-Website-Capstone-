import React from "react";
import {render, screen, fireEvent} from "@testing-library/react";
import App from "../../App";
import "@testing-library/jest-dom";
// import Login from "../Login";

describe('Login Component', () => {
test ('renders login form', () => {
    render(<App/>);
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const submitButton = screen.getByText(/submit/i);

    expect (usernameInput).toBeInTheDocument();
    expect (passwordInput).toBeInTheDocument();
    expect (submitButton).toBeInTheDocument();

    fireEvent.change(usernameInput,{target:{value:'testuser'}});
    fireEvent.change(passwordInput,{target:{value:'testpassword'}})
    fireEvent.click(submitButton);
})
})
