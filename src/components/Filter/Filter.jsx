import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import React from 'react';
import { SearchInput, FormField } from './Filter.styled';
import { addFilter } from 'Redax/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FormField>
      Search
      <SearchInput
        type="text"
        name="filter"
        onChange={(e) => {dispatch(addFilter(e.currentTarget.value))}}/>
    </FormField>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
