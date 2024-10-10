import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegister from "./Components/LoginRegister/LoginRegister"
import Dashboard from "./Components/dashboard/dashboard"
function RoutePages() {
    return (
        <div>
            <Router>
                <Routes>
                  <Route path="/" exact element={<LoginRegister/>} />
                    <Route path="/login" element={<LoginRegister/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                </Routes>
            </Router>
        </div>
    );
};
export default RoutePages;
