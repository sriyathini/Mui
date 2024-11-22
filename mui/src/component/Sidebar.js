import React, { useState } from 'react';
import { Nav, Button, Container, Row, Col } from 'react-bootstrap';
import { FaSignOutAlt } from 'react-icons/fa';
import {  Users, Settings } from 'react-feather'; // Import Feather icons

const Sidebar = () => {
  const [activePage, setActivePage] = useState('home'); // To track the active page

  const handleLogout = () => {
    // Handle logout logic here
    console.log("Logged out!");
  };

  const handlePageChange = (page) => {
    setActivePage(page); // Set active page when a menu item is clicked
  };

  return (
    <div className="d-flex">
      {/* Main Content */}
      <div className="main-content" style={{ flex: 1 }}>
        {/* Top Header with Logo */}
        <div className="header d-flex justify-content-between align-items-center bg-dark text-white p-3">
          <div className="logo-container">
            <div className="logo">MyApp</div> {/* Standard Logo */}
          </div>
          <Button variant="outline-light" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </Button>
        </div>

        {/* Main Content Area */}
        <div className="content p-4 mt-3">
          {/* Navigation */}
          <div className="navigation d-flex justify-content-start p-3">
            <Nav className="flex-row">
              <Nav.Link
                href="#users"
                className="text-dark mx-3"
                onClick={() => handlePageChange('users')}
              >
                <Users className="me-2" /> Users
              </Nav.Link>
              <Nav.Link
                href="#settings"
                className="text-dark mx-3"
                onClick={() => handlePageChange('settings')}
              >
                <Settings className="me-2" /> Settings
              </Nav.Link>
            </Nav>
          </div>

          {/* Dynamic Content */}
          {activePage === 'home' && (
            <Container>
              <Row>
                <Col>
                  <h1>Home Page</h1>
                  <p>Welcome to the home page of the dashboard!</p>
                </Col>
              </Row>
            </Container>
          )}
          {activePage === 'users' && (
            <Container>
              <Row>
                <Col>
                  <h1>Users Page</h1>
                  <p>Here are the details of users.</p>
                </Col>
              </Row>
            </Container>
          )}
          {activePage === 'settings' && (
            <Container>
              <Row>
                <Col>
                  <h1>Settings Page</h1>
                  <p>Change your settings here.</p>
                </Col>
              </Row>
            </Container>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
