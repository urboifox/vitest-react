import { screen, render } from "@testing-library/react";
import TermsAndConditions from "@/components/terms-and-conditions";
import userEvent from "@testing-library/user-event";

describe("TermsAndConditions", () => {
    const renderComponent = () => {
        render(<TermsAndConditions />);

        return {
            checkbox: screen.getByRole("checkbox"),
            button: screen.getByRole("button"),
        };
    };

    it("should render with correct text and initial state", () => {
        const { button, checkbox } = renderComponent();

        expect(checkbox).not.toBeChecked();
        expect(button).toBeDisabled();
    });

    it("should enable the button when the checkbox is checked", async () => {
        const { button, checkbox } = renderComponent();

        const user = userEvent.setup();
        await user.click(checkbox);

        expect(button).toBeEnabled();
    });
});
