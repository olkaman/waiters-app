//selectors
export const getAllTables = (state) => state.tables;
export const getTableById = ({ tables }, tableId) => tables.find((table) => table.id === tableId);

//actions
export const updateTables = (payload) => ({ type: 'UPDATE_TABLES', payload });
export const fetchTables = () => (dispatch) => {
  fetch('http://localhost:3131/api/tables')
    .then((result) => result.json())
    .then((tables) => dispatch(updateTables(tables)));
};

//subreducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'UPDATE_TABLES':
      return [...action.payload];
    default:
      return statePart;
  }
};

export default tablesReducer;
