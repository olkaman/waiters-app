import { useSelector } from 'react-redux';
import { getAllTables } from '../../redux/tablesReducer';
import Table from '../Table/Table';

const TableList = () => {
  const tables = useSelector(getAllTables);

  return (
    <section>
      {tables.map((table) => (
        <Table key={table.id} name={table.name} status={table.status} id={table.id} />
      ))}
    </section>
  );
};

export default TableList;
