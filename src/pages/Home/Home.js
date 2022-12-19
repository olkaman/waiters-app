import Header from '../../components/Header/Header';
import TableList from '../../components/TableList/TableList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from '../../redux/tablesReducer';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      <Header />
      <h2>All tables</h2>
      <TableList />
    </div>
  );
};
export default Home;
