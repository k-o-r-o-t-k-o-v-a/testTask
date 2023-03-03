import './App.css';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import HomePage from './pages/homePage';
import NotFound from './pages/notFound';
import UserPage from './pages/userPage';

function App() {
  const [loadPage, setLoadPage] = useState(false);
  const [tableStatus, setTableStatus] = useState('empty');
  const [btnTxt, setBtnTxt] = useState('Загрузить');
  const [tableData, setTableData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [searchId, setSearchId] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [checkboxIsChecked, setCheckboxIsChecked] = useState(false);
  const [inputDisable, setInputDisable] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={(
          <HomePage
            loadPage={loadPage}
            setLoadPage={setLoadPage}
            tableStatus={tableStatus}
            setTableStatus={setTableStatus}
            btnTxt={btnTxt}
            setBtnTxt={setBtnTxt}
            tableData={tableData}
            setTableData={setTableData}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchId={searchId}
            setSearchId={setSearchId}
            filteredData={filteredData}
            setFilteredData={setFilteredData}
            checkboxIsChecked={checkboxIsChecked}
            setCheckboxIsChecked={setCheckboxIsChecked}
            inputDisable={inputDisable}
            setInputDisable={setInputDisable}
          />
        )}
      />
      <Route path="*" element={<NotFound />} />
      <Route path="/notfound" element={<NotFound />} />
      <Route path="/bigdata/:id" element={<UserPage />} />
    </Routes>
  );
}

export default App;
