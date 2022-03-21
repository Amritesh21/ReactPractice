import { fireEvent, render, screen } from "@testing-library/react"
import { ButtonTestComponent } from "../ButtonTestComponent"

test('button test component', () => {
    render(<ButtonTestComponent/>);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
})

test('button click event test', () => {
    render(<ButtonTestComponent/>);
    const btnIncrement = screen.getByTestId('count-increment');
    fireEvent.click(btnIncrement);
    const textUpdated = screen.getByText(1);
    expect(textUpdated).toBeInTheDocument();
   // expect(screen.findByTestId("count-header")).toHaveTextContent("1");
})