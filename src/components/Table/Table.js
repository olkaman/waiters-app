import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Table.module.scss';
import clsx from 'clsx';

const Table = () => {
  return (
    <div className={clsx(styles.wrapper, 'flex', 'alignItems')}>
      <div className={clsx(styles.tableWrapper, 'flex', 'alignItems')}>
        <h4>Table 1</h4>
        <span>Status: Reserved</span>
      </div>
      <Button variant='primary'>Show more</Button>
    </div>
  );
};

export default Table;
