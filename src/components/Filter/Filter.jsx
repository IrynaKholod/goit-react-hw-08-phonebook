import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { SearchInput, FormField } from './Filter.styled';
import { addFilter } from 'Redax/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  
  return (
    <FormField>
      Search
      <SearchInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => {
          dispatch(addFilter(e.currentTarget.value));
        }}
      />
    </FormField>
  );
};
