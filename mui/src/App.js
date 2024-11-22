import React, { useState } from "react";
import { FiMenu, FiX, FiHome, FiInfo, FiBriefcase, FiPhone, FiLogOut } from "react-icons/fi";
import "./App.css";

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            {/* Header */}
            <div className="header">
                <div className="logo">MyLogo</div> {/* Logo on the left */}
                <div className="logout" onClick={() => alert('Logging out...')}> {/* Logout Button */}
                    <FiLogOut size={24} />
                    <span>Logout</span>
                </div>
            </div>

            <div className="app">
                {/* Sidebar */}
                <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                    {/* Toggle Icon */}
                    <div className="toggle-icon" onClick={toggleSidebar}>
                        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </div>

                    {/* Sidebar Menu */}
                    <ul>
                        <li>
                            <FiHome size={20} />
                            <span>Home</span>
                        </li>
                        <li>
                            <FiInfo size={20} />
                            <span>About</span>
                        </li>
                        <li>
                            <FiBriefcase size={20} />
                            <span>Services</span>
                        </li>
                        <li>
                            <FiPhone size={20} />
                            <span>Contact</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className={`main-content ${isSidebarOpen ? "small" : ""}`}>
                    <h1>Welcome to the Main Content</h1>
                    <p>This is a responsive layout with a toggleable sidebar.</p>
                </div>
            </div>
        </div>
    );
}

export default App;

