// Settings.jsx
import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const Settings = () => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <h4>Change Admin Details</h4>
        <Form>
          <Form.Group controlId="formAdminName">
            <Form.Label>Admin Name</Form.Label>
            <Form.Control type="text" placeholder="Enter new admin name" />
          </Form.Group>
          <Form.Group controlId="formAdminEmail">
            <Form.Label>Admin Email</Form.Label>
            <Form.Control type="email" placeholder="Enter new admin email" />
          </Form.Group>
          <Button variant="primary" type="submit">Save Changes</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Settings;
