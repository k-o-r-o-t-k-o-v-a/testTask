import React, { useState, useEffect, useCallback } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { MoonLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TableError from '../components/TableError/TableError';
import ApiService from '../service/api';
import Container from '../components/Container/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';
import Checkbox from '../components/Checkbox/Checkbox';
import Table from '../components/Table/Table';
import useDebouncedFunction from '../components/helpers/useDebouncedFunction';
import {
  setLoadPage,
  setTableStatus,
  setBtnTxt,
  setTableData,
  setSearchValue,
  setSearchId,
  setFilteredData,
  setCheckboxIsChecked,
  setInputDisable,
  toggleCheckboxIsChecked,
  toggleInputDisable
} from '../redux/actions/actions-creators';

const service = new ApiService();

const randomEp = [
  { f: service.getError },
  { f: service.getSmallData },
  { f: service.getBigData }
];

const tableHead = ['id', 'firstName', 'lastName', 'phone', 'email', 'description', 'address'];

function HomePage() {
  const {
    loadPage,
    tableStatus,
    btnTxt,
    tableData,
    searchValue,
    searchId,
    filteredData,
    checkboxIsChecked,
    inputDisable
  } = useSelector(store => store.rootReducer);
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState([]);
  const [sortObj, setSortObj] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const getData = () => {
    dispatch(setSearchValue(''));
    dispatch(setSearchId(''));
    dispatch(setLoadPage(true));
    dispatch(setCheckboxIsChecked(false));
    randomEp[Math.floor(Math.random() * randomEp.length)].f().then(res => {
      if (res?.data.error) {
        dispatch(setTableStatus('error'));
        dispatch(setBtnTxt('Попробовать снова'));
        dispatch(setTableData([]));
        dispatch(setFilteredData([]));
        setErrorText(res.data.error.message);
      } else {
        dispatch(setTableStatus('success'));
        dispatch(setBtnTxt('Обновить'));
        dispatch(setTableData(res.data));
        dispatch(setFilteredData(res.data));
        dispatch(setInputDisable(false));
        setCount(count + 1);
      }
    }).finally(_ => {
      dispatch(setLoadPage(false));
    });
  };

  const toUserPage = user => {
    navigate(`/bigdata/${user?.id}`);
  };

  const sortTableData = (field, obj) => {
    if (obj && field === obj?.field) {
      if (obj.type === 'up') {
        return { field, type: 'down' };
      }
    }
    return { field, type: 'up' };
  };

  const requestSort = item => {
    setSortObj(sortTableData(item, sortObj));
  };

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
          <TableError
            errorParam={errorText}
          />
        );
      case 'success':
        return (
          <Col xs={24}>
            <Table
              head={tableHead}
              clickOnRow={toUserPage}
              clickOnHeadItem={requestSort}
              list={filteredData}
              className={`Table__el_head ${sortObj?.field ? `head-el-active head-el-active-${sortObj?.type}` : ''}`}
            />
          </Col>
        );
      default:
        return null;
    }
  }, [tableStatus, filteredData, errorText]);

  const handleChangeSearchValueId = value => {
    if (value !== '' && +value > 0) {
      dispatch(setSearchId(value));
    } else {
      dispatch(setSearchId(''));
    }
  };

  const debouncedSearchValue = useDebouncedFunction(
    (searchValueParam, searchIdParam) => {
      let arr = tableData;

      if (searchValueParam) {
        arr = arr.filter(i => i.lastName.toUpperCase().includes(searchValue.toUpperCase()));
      }
      if (searchId) {
        arr = arr.filter(i => `${i.id}`.includes(searchIdParam));
      }
      dispatch(setFilteredData(arr));
    },
    300
  );

  const sortingByDirection = async() => {
    let arr = tableData;

    if (sortObj) {
      const { field, type } = sortObj;

      if (type === 'up') {
        arr = [...arr.sort((a, b) => (a[field] > b[field] ? 1 : -1))];
      } else {
        arr = [...arr.sort((a, b) => (a[field] < b[field] ? 1 : -1))];
      }
    }

    dispatch(setFilteredData(arr));
  };

  useEffect(() => {
    if (count !== 0) {
      tableData?.length === 0 ? dispatch(setInputDisable(true)) : dispatch(setInputDisable(false));
    }
  }, [tableData]);

  useEffect(() => {
    if (searchValue || searchId) {
      debouncedSearchValue(searchValue, searchId);
    }
  }, [searchValue, searchId, tableData]);

  useEffect(() => {
    sortingByDirection();
  }, [sortObj]);

  return (
    <div style={{
      padding: '40px 0',
      overflow: 'hidden',
      height: '100vh'
    }}
    >
      <Container>
        <Row>
          <Col style={{ padding: 10 }} xs={24}>
            <Row style={{ alignItems: 'center' }}>
              <Col>
                <Input
                  disabled={inputDisable}
                  onChange={e => dispatch(setSearchValue(e.target.value))}
                  placeholder="Введите фамилию для поиска"
                  value={searchValue}
                />
              </Col>
              <Col>
                <Input
                  disabled={inputDisable}
                  onChange={e => handleChangeSearchValueId(e.target.value)}
                  placeholder="Введите id для поиска"
                  type="number"
                  value={searchId}
                />
              </Col>
              <Col>
                <Checkbox
                  disabled={tableData?.length === 0}
                  label="Disable input?"
                  onClick={e => dispatch(toggleInputDisable())}
                  onChange={() => dispatch(toggleCheckboxIsChecked())}
                  isChecked={checkboxIsChecked}
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
