import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { SearchInput, FormField } from './Filter.styled';
import { filterContacts } from 'Redax/FilterSlice';
import { getFilter } from 'Redax/Selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  
  return (
    <FormField>
      Search
      <SearchInput
        type="text"
        name="filter"
        value={filter}
        onChange={e => {
          dispatch(filterContacts(e.currentTarget.value));
        }}
      />
    </FormField>
  );
};
