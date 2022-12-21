import PropTypes from 'prop-types';
import React from 'react';
import {SearchInput, FormField } from './Filter.styled';

const Filter = ({value, onChange}) => 
    <FormField>Search
    <SearchInput
     type="text" 
     value={value}
     onChange={onChange}/>
    </FormField>

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
}
export default Filter;
