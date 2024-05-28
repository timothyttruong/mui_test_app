import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"
import StateOne from "./StateOne";

test("Test plus button", () => {
    render(<StateOne />);

    const plusButton = screen.getByText("+");
    const countDisplay = screen.getByText("0");

    fireEvent.click(plusButton);

    expect(countDisplay.textContent).toBe("1");
});

test("Test wrong value", () => {
    render(<StateOne />);

    const plusButton = screen.getByText("+");
    const countDisplay = screen.getByText("0");

    fireEvent.click(plusButton);

    expect(countDisplay.textContent).toBe("2");
})

test("Test minus button", () => {
    render(<StateOne />);

    const minusButton = screen.getByText("-");
    const countDisplay = screen.getByText("0");

    fireEvent.click(minusButton);

    expect(countDisplay.textContent).toBe("-1");
});