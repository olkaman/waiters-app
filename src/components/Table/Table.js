import styles from './Table.module.scss';
import clsx from 'clsx';
import { Link } from 'react-router-dom';

const Table = ({ id, name, status }) => {
  return (
    <div key={id} className={clsx(styles.wrapper, 'flex', 'alignItems')}>
      <div className={clsx(styles.tableInfoWrapper, 'flex', 'alignItems')}>
        <h4>{name}</h4>
        <span>Status: {status}</span>
      </div>
      <Link to={'/details/' + id} className='button'>
        Show more
      </Link>
    </div>
  );
};

export default Table;
