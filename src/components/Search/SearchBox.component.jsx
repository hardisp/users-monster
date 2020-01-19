import React from 'react';
import './SearchBox.style.css';

const SearchBox = props => {
  const {onChange, value, onSubmit} = props;
  const handleOnChange = e => {
    e.preventDefault();

    const {target} = e;
    onChange(target);
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          value={value}
          name="searchKey"
          placeholder="Search monster"
          onChange={handleOnChange}
          className="search"
        />
      </form>
    </div>
  );
};

export default SearchBox;
