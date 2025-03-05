import { render, screen } from "@testing-library/react";
import Button from "@/components/button";

describe("Button", () => {
    it("should render a hello message if name provided", () => {
        render(<Button name="Fox" />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/fox/i);
    });

    it("should render a login button if no name provided", () => {
        render(<Button />);

        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent(/login/i);
    });
});
