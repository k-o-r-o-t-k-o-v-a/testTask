import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  Col, Row, Button, Container
} from 'react-bootstrap';
import apiServise from '../service/api';

const service = new apiServise();

function UserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [list, setList] = useState([]);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    service.getBigData().then(res => setList(res));
  }, []);

  useEffect(() => {
    if (id && list?.length > 0) {
      // eslint-disable-next-line eqeqeq
      const user = list.find(i => i.id == id);

      user ? setUserInfo(user) : navigate('/notfound');
    }
  }, [id, list]);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Row>
            <Col xs={12}>
              <b>First name:</b>
              {' '}
              {`${userInfo?.firstName}`}
            </Col>
            <Col xs={12}>
              <b>Last name:</b>
              {' '}
              {`${userInfo?.lastName}`}
            </Col>
            <Col xs={12}>
              <b>Email:</b>
              {' '}
              {`${userInfo?.email}`}
            </Col>
            <Col xs={12}>
              <b>Phone:</b>
              {' '}
              {`${userInfo?.phone}`}
            </Col>
            <Col xs={12}>
              <b>Address:</b>
              {' '}
              {`${userInfo?.address?.streetAddress}, ${userInfo?.address?.city}, ${userInfo?.address?.state}, ${userInfo.address?.zip}`}
            </Col>
            <Col xs={12}>
              <b>Description:</b>
              {' '}
              {`${userInfo?.description}`}
            </Col>
          </Row>

        </Col>
        <Col xs={12}>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Назад
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPage;
