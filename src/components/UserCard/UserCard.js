import { Col, Row } from 'react-bootstrap';
import React from 'react';
import './UserCard.scss';

function UserCard({
  firstName,
  lastName,
  email,
  phone,
  address,
  description
}) {
  return (

    <Row>
      <Col xs={12}>
        <b>First name: </b>
        {firstName}
      </Col>
      <Col xs={12}>
        <b>Last name: </b>
        {lastName}
      </Col>
      <Col xs={12}>
        <b>Email: </b>
        {email}
      </Col>
      <Col xs={12}>
        <b>Phone: </b>
        {phone}
      </Col>
      <Col xs={12}>
        <b>Address: </b>
        {address}
      </Col>
      <Col xs={12}>
        <b>Description: </b>
        {description}
      </Col>
    </Row>
  );
}

export default UserCard;
