//selectors
export const getAllTables = (state) => state.tables;

//actions
export const updateTables = (payload) => ({ type: 'UPDATE_TABLES', payload });

//subreducer
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'UPDATE_TABLES':
      return [...statePart, { ...action.payload }];
    default:
      return statePart;
  }
};

export default tablesReducer;
