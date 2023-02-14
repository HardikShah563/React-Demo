import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();

    return (
        <nav>
            <div className="logo">
                React-Demo
            </div>
            <div className="nav-links">
                <div className="link" onClick={() => navigate("/home")}>
                    Home
                </div>
                <div className="link" onClick={() => navigate("/about")}>
                    About
                </div>
            </div>
        </nav>
    );
}