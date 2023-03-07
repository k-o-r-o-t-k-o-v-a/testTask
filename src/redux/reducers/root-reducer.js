import actions from '../actions/action-types';

const initialState = {
  loadPage: false,
  tableStatus: 'empty',
  btnTxt: 'Загрузить',
  tableData: [],
  searchValue: '',
  searchId: '',
  filteredData: [],
  checkboxIsChecked: false,
  inputDisable: true
};

function rootReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actions.SET_LOAD_PAGE:
      return {
        ...state,
        loadPage: action.payload
      };
    case actions.SET_TABLE_STATUS:
      return {
        ...state,
        tableStatus: action.payload
      };
    case actions.SET_BTN_TXT:
      return {
        ...state,
        btnTxt: action.payload
      };
    case actions.SET_TABLE_DATA:
      return {
        ...state,
        tableData: action.payload
      };
    case actions.SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.payload

      };
    case actions.SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload
      };
    case actions.SET_FILTERED_DATA:
      return {
        ...state,
        filteredData: action.payload

      };
    case actions.SET_CHECKBOX_IS_CHECKED:
      return {
        ...state,
        checkboxIsChecked: action.payload

      };
    case actions.SET_INPUT_DISABLE:
      return {
        ...state,
        inputDisable: action.payload

      };
    case actions.TOGGLE_CHECKBOX_IS_CHECKED:
      return {
        ...state,
        checkboxIsChecked: !state.checkboxIsChecked

      };
    case actions.TOGGLE_INPUT_DISABLE:
      return {
        ...state,
        inputDisable: !state.inputDisable

      };
    default:
      return state;
  }
}

export default rootReducer;
