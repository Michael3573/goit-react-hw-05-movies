import { useState } from 'react';
import styles from './SearchFrom.module.css';

const SearchFrom = ({ handleSubmit }) => {
  const [value, setValue] = useState('');

  const onHandleChange = e => {
    setValue(e.target.value);
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    handleSubmit(value);
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <input
        className={styles.input}
        value={value}
        type="text"
        name="query"
        onChange={onHandleChange}
        placeholder="What do you find?"
      />
    </form>
  );
};

export default SearchFrom;
