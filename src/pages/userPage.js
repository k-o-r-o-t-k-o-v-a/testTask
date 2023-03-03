import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Button from '../components/Button/Button';
import UserCard from '../components/UserCard/UserCard';
import apiServise from '../service/api';

const service = new apiServise();

function UserPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const getUser = async message => {
    await service.getUserById(id)
      .then(res => {
        if (res.status === '200') {
          setUserInfo(res.data);
        } else {
          navigate('/notfound');
          console.log('Response error occurred; status code :', res.status);
        }
      })
      .catch(err => {
        navigate('/notfound');
        console.log('Error occurred;', 'error name:', err.name, 'error msg:', err.message);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      <Row style={{ alignItems: 'center' }}>
        <Col xs={12}>
          <UserCard
            firstName={`${userInfo?.firstName}`}
            lastName={`${userInfo?.lastName}`}
            email={`${userInfo?.email}`}
            phone={`${userInfo?.phone}`}
            address={`
            ${userInfo?.address?.streetAddress}, 
            ${userInfo?.address?.city}, 
            ${userInfo?.address?.state}, ${userInfo.address?.zip}
            `}
            description={`${userInfo?.description}`}
          />

        </Col>
        <Col xs={12}>
          <Button
            variant="default"
            onClick={() => navigate(-1)}
          >
            Назад
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPage;
