import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Button from '../components/Button/Button';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <h1 style={{ textAlign: 'center' }}>
            404
            <br />
            Not found
          </h1>
        </Col>
        <Col style={{ padding: 10, display: 'flex', justifyContent: 'center' }} xs={24}>
          <Button
            variant="default"
            onClick={() => { navigate('/'); }}
          >
            Назад
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFound;
