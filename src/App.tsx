import "./App.css";
import { instance } from "./axios";

const creds = [
    {
        email: "giga.giorgadze.11@gmail.com",
        password: "123456",
    },
    {
        email: "gigagiorgadze@redberry.ge",
        password: "123456",
    },
];

function App() {
    const loginGmail = async () => {
        try {
            const res = await instance.post("/api/login", creds[0]);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const loginRedberry = async () => {
        try {
            const res = await instance.post("/api/login", creds[1]);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const fetchMe = async () => {
        try {
            const res = await instance.get("/api/me");
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            const res = await instance.post("/api/logout");
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <button
                type="button"
                onClick={loginGmail}
                className="bg-white p-4 text-red-500 rounded-sm"
            >
                Login GMAIL
            </button>
            <button
                type="button"
                onClick={loginRedberry}
                className="bg-white p-4 text-red-500 rounded-sm"
            >
                Login REDBERRY
            </button>
            <button
                type="button"
                onClick={fetchMe}
                className="bg-white p-4 text-red-500 rounded-sm"
            >
                Fetch me
            </button>
            <button
                type="button"
                onClick={logout}
                className="bg-white p-4 text-red-500 rounded-sm"
            >
                logout
            </button>
        </>
    );
}

export default App;
