import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import Form from "./Form";

test("First Test Form", () => {
    render(<Form />);   //first it renders the form
    const textFile = screen.getByText(/Simple Form/i); //then try to find the element using screen.getByText
    expect(textFile).toBeInTheDocument(); 
});

test("Second Test Form", async () => {
    render(<Form />);
    const textFile = await screen.findByText(/Simple Form/i)
    expect(textFile).toBeInTheDocument(); 
})

test("Test Email", async () => {
    render(<Form />);
    const emailText = await screen.findByPlaceholderText("Email");
    expect(emailText).toBeInTheDocument(); 
});