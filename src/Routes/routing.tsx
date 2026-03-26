import { Routes, Route } from "react-router-dom";
import Home from "../components/home";
import History from "../components/history";
import Setting from "../components/setting";

export default function Routing() {
    return (
        <main className="flex-1 min-h-screen overflow-auto">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/history" element={<History />} />
                <Route path="/settings" element={<Setting />} />
            </Routes>
        </main>
    )
}
