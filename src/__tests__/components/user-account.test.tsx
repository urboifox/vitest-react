import { render, screen } from "@testing-library/react";
import UserAccount from "@/components/user-account";
import { User } from "@/types/entities";

const user: User = {
    id: 1,
    name: "Fox",
    isAdmin: false,
};

const admin: User = {
    id: 1,
    name: "Fox",
    isAdmin: true,
};

describe("UserAccount", () => {
    it("should render the name", () => {
        render(<UserAccount user={user} />);
        const name = screen.getByText(user.name);
        expect(name).toBeInTheDocument();
    });

    it("should render the edit button if user is admin", () => {
        render(<UserAccount user={admin} />);
        const editButton = screen.getByRole("button");
        expect(editButton).toBeInTheDocument();
        expect(editButton).toHaveTextContent(/edit/i);
    });

    it("should not render the edit button if user is not admin", () => {
        render(<UserAccount user={user} />);
        const editButton = screen.queryByRole("button");
        expect(editButton).not.toBeInTheDocument();
    });
});
