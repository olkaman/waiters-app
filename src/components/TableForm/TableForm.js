import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './TableForm.module.scss';
import { useSelector } from 'react-redux';
import { getTableById } from '../../redux/tablesReducer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const TableForm = () => {
  const { tableId } = useParams();
  const tableData = useSelector((state) => getTableById(state, tableId));
  const [status, setStatus] = useState(tableData.status);
  const [people, setPeople] = useState(tableData.people);
  const [maxPeople, setMaxPeople] = useState(tableData.maxPeople);
  const [bill, setBill] = useState(tableData.bill);

  const onChangeStatus = (e) => {
    const tableStatus = e.target.value;
    setStatus(tableStatus);
    if (tableStatus === 'Free' || tableStatus === 'Cleaning' || tableStatus === 'Reserved') {
      setPeople('0');
      setBill('0');
    } else {
      setBill('0');
    }
  };

  useEffect(() => {
    if (maxPeople < people) {
      setPeople(maxPeople);
    }
  }, [people, maxPeople]);

  const submitForm = () => {};

  return (
    <div>
      <h4>{tableData.name}</h4>
      <Form className={styles.formWrapper} onSubmit={submitForm}>
        <Row className='alignItems mb-3'>
          <Form.Group as={Col} className='mb-3'>
            <Form.Label column>Status:</Form.Label>
          </Form.Group>
          <Form.Group as={Col} className='mb-3'>
            <Form.Select aria-label='Status' defaultValue={tableData.status} onChange={onChangeStatus}>
              <option value='Busy'>Busy</option>
              <option value='Free'>Free</option>
              <option value='Reserved'>Reserved</option>
              <option value='Cleaning'>Cleaning</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <Row className='alignItems mb-3'>
          <Form.Group as={Col} controlId='formBasicEmail'>
            <Form.Label column>People:</Form.Label>
          </Form.Group>
          <Form.Group as={Col} controlId='formBasicEmail'>
            <Form.Control type='number' as='input' value={people} min='0' max='10' onChange={(e) => setPeople(e.target.value)} />
          </Form.Group>
          /
          <Form.Group as={Col} controlId='formBasicEmail'>
            <Form.Control type='number' as='input' value={maxPeople} min='0' max='10' onChange={(e) => setMaxPeople(e.target.value)} />
          </Form.Group>
        </Row>
        {status === 'Busy' && (
          <Row className={clsx('alignItems', 'mb-3')}>
            <Form.Group as={Col} controlId='formBasicEmail'>
              <Form.Label column>Bill:</Form.Label>
            </Form.Group>
            <Form.Group as={Col} controlId='formBasicEmail' className='flex alignItems'>
              <span>$</span> <Form.Control type='number' value={bill} onChange={(e) => setBill(e.target.value)} min='0' />
            </Form.Group>
          </Row>
        )}

        <Button variant='primary' type='submit'>
          Update
        </Button>
      </Form>
    </div>
  );
};
export default TableForm;
