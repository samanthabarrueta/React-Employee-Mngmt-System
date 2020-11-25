import React from 'react';

function SearchForm(props) {
  return (

        <input
        onChange={props.handleInputChange}
        value={props.value}
        name='search'
        type='text'
        className='form-control'
        placeholder='Search For an Employee'
        id='search'
        />   
  );
}

export default SearchForm;