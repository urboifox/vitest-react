import { User } from "@/types/entities";

export default function UserAccount({ user }: { user: User }) {
    return (
        <>
            <h2>User Account</h2>
            {user.isAdmin && <button>Edit</button>}
            <div>
                <strong>Name:</strong> {user.name}
            </div>
        </>
    );
}
