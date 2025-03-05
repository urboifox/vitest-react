export default function Button({name}: {name?: string}) {
    if (name) return <h1>Hello {name}</h1>

    return <button>Login</button>
}
