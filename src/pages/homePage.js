import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MoonLoader } from 'react-spinners';
import TableError from '../components/TableError/TableError';
import apiServise from '../service/api';
import Container from '../components/Container/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox/Checkbox';
import Table from '../components/Table/Table';

const service = new apiServise();

const randomEp = [
  { f: service.getError },
  { f: service.getSmallData },
  { f: service.getBigData }
];

const tableHead = ['id', 'firstName', 'lastName', 'phone', 'email', 'descr', 'address'];

function HomePage() {
  const [loadPage, setLoadPage] = useState(false);
  const [tableStatus, setTableStatus] = useState('empty');
  const [btnTxt, setBtnTxt] = useState('Загрузить');
  const [tableData, setTableData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [inputStatus, setInputStatus] = useState(false);
  const navigate = useNavigate();

  const getData = () => {
    setSearchValue('');
    setLoadPage(true);
    randomEp[Math.floor(Math.random() * randomEp.length)].f().then(res => {
      // console.log(res)
      if (res?.error) {
        setTableStatus('error');
        setBtnTxt('Попробовать снова');
        setTableData([]);
        setFilteredData([]);
      } else {
        setTableStatus('success');
        setBtnTxt('Обновить');
        setTableData(res);
        setFilteredData(res);
      }
    }).finally(_ => {
      setLoadPage(false);
    });
  };

  const toUserPage = user => {
    navigate(`/bigdata/${user?.id}`);
  };

  useEffect(() => {
    if (searchValue) {
      const arr = tableData.filter(i => i.lastName.toUpperCase().includes(searchValue.toUpperCase()));

      setFilteredData(arr);
    } else {
      setFilteredData(tableData);
    }
  }, [searchValue, tableData]);

  const switchContent = useCallback(() => {
    switch (tableStatus) {
      case 'empty':
        return (
          <Col xs={24} style={{ textAlign: 'center' }}>
            Empty table
          </Col>
        );
      case 'error':
        return (
          <TableError />
        );
      case 'success':
        return (
          <Col xs={24}>
            <Table
              list={filteredData}
              head={tableHead}
              clickOnRow={toUserPage}
            />
          </Col>
        );
      default:
        return null;
    }
  }, [tableStatus, filteredData]);

  useEffect(() => {
    tableData?.length === 0 ? setInputStatus(true) : setInputStatus(false);
  }, [tableData]);

  return (
    <div style={{ padding: '40px 0' }}>
      <Container>
        <Row>
          <Col style={{ padding: 10 }} xs={24}>
            <Row style={{ alignItems: 'center' }}>
              <Col>
                <Input
                  disabled={inputStatus}
                  onChange={e => setSearchValue(e.target.value)}
                  placeholder="Введите фамилию для поиска"
                  value={searchValue}
                />
              </Col>
              <Col>
                <Checkbox
                  disabled={tableData?.length === 0}
                  label="Disable input?"
                  onChange={e => setInputStatus(s => !s)}
                />
              </Col>
            </Row>
          </Col>
          <Col style={{ padding: 10, display: 'flex', justifyContent: 'center' }} xs={24}>
            <Button
              onClick={getData}
              variant={tableStatus === 'error' ? 'danger' : 'default'}
              text={btnTxt}
            />
          </Col>
          <Col xs={24} style={{ padding: 10 }}>
            {
              loadPage ? (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <MoonLoader />
                </div>
              ) : (
                switchContent()
              )
            }
          </Col>
        </Row>
      </Container>
    </div>

  );
}
export default HomePage;
