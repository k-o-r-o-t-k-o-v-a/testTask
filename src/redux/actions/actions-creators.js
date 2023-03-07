import actions from './action-types';
export function setLoadPage(loadPage) {
  return {
    type: actions.SET_LOAD_PAGE,
    payload: loadPage
  };
}
export function setTableStatus(tableStatus) {
  return {
    type: actions.SET_TABLE_STATUS,
    payload: tableStatus
  };
}
export function setBtnTxt(btnTxt) {
  return {
    type: actions.SET_BTN_TXT,
    payload: btnTxt
  };
}
export function setTableData(tableData) {
  return {
    type: actions.SET_TABLE_DATA,
    payload: tableData
  };
}
export function setSearchValue(searchValue) {
  return {
    type: actions.SET_SEARCH_VALUE,
    payload: searchValue
  };
}
export function setSearchId(searchId) {
  return {
    type: actions.SET_SEARCH_ID,
    payload: searchId
  };
}
export function setFilteredData(filteredData) {
  return {
    type: actions.SET_FILTERED_DATA,
    payload: filteredData
  };
}
export function setCheckboxIsChecked(checkboxIsChecked) {
  return {
    type: actions.SET_CHECKBOX_IS_CHECKED,
    payload: checkboxIsChecked
  };
}
export function setInputDisable(inputDisable) {
  return {
    type: actions.SET_INPUT_DISABLE,
    payload: inputDisable
  };
}
export function toggleCheckboxIsChecked() {
  return {
    type: actions.TOGGLE_CHECKBOX_IS_CHECKED
  };
}
export function toggleInputDisable() {
  return {
    type: actions.TOGGLE_INPUT_DISABLE
  };
}
