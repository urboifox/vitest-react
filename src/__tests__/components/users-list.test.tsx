import UsersList from "@/components/users-list";
import { User } from "@/types/entities";
import { render, screen } from "@testing-library/react";

describe("UsersList", () => {
    it("should render a list of users", () => {
        const users: User[] = [
            { id: 1, name: "Fox" },
            { id: 2, name: "Ashraf" },
        ];

        render(<UsersList users={users} />);

        users.forEach((user) => {
            const link = screen.getByRole("link", { name: user.name });
            expect(link).toBeInTheDocument();
            expect(link).toHaveAttribute("href", `/users/${user.id}`);
        });
    });

    it("should render a message if no users found", () => {
        render(<UsersList users={[]} />);

        const message = screen.getByText(/no users/i);
        expect(message).toBeInTheDocument();
    });
});
