import { Link } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <h4>waiters.app</h4>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Header;
