import { User } from "@/types/entities";

export default function UsersList({ users }: { users: User[] }) {
    if (users.length === 0) return <p>No users found</p>;

    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <a href={`/users/${user.id}`}>{user.name}</a>
                </li>
            ))}
        </ul>
    );
}
