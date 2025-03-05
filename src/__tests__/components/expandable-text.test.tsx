import { render, screen } from "@testing-library/react";
import ExpandableText from "@/components/expandable-text";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
    const limit = 20;
    const longText = "a".repeat(limit + 1);
    const truncatedText = longText.substring(0, 20) + "...";

    it("should render the full text if less than the limit", () => {
        const text = "Hello World";
        render(<ExpandableText text={text} />);

        expect(screen.getByText(text)).toBeInTheDocument();
    });

    it("should truncate text if longer that the limit", async () => {
        render(<ExpandableText text={longText} />);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent(/more/i);
    });

    it("should expand text when show more button is clicked", async () => {
        render(<ExpandableText text={longText} />);

        const button = screen.getByRole("button");
        const user = userEvent.setup();
        await user.click(button);

        expect(screen.getByText(longText)).toBeInTheDocument();
        expect(button).toHaveTextContent(/less/i);
    });

    it("should collabse text when show less button is clicked", async () => {
        render(<ExpandableText text={longText} />);
        const showMoreButton = screen.getByRole("button", { name: /more/i });
        const user = userEvent.setup();
        await user.click(showMoreButton);

        const showLessButton = screen.getByRole("button", { name: /less/i });
        await user.click(showLessButton);

        expect(screen.getByText(truncatedText)).toBeInTheDocument();
        expect(showMoreButton).toHaveTextContent(/more/i);
    });
});
