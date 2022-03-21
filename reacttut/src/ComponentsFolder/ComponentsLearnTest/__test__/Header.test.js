import { render,screen } from "@testing-library/react"
import { HeaderDisplay } from "../HeaderDisplay"

test('test header', () => {
    render(<HeaderDisplay title='hello world'/>)
    const headingElement = screen.getByText(/hello world/i);
    expect(headingElement).toBeInTheDocument();
})