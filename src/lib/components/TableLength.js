/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StoreContext } from '../utils/storeContext';
import PropTypes from 'prop-types';
import 'datable-react/dist/index.css';

/**
 * Component to select the number of entries to show
 * @param {Object[]} data - table's data
 * @param {boolean} language - to set the language
 * @param {Object} customLength - style of the length component
 * @returns { HTMLElement }
 */
const TableLength = ({ data, language, customLength }) => {
  const { store } = useContext(StoreContext)

  // function to update index, length, count and current page
  const handleChange = (e) => {
    store.length[1](Number(e.target.value))
    store.indexEnd[1](Number(e.target.value))
    store.indexStart[1](0)
    store.count[1](data.length)
    store.currentPage[1](1)
    store.totalPage[1](Math.ceil(store.dataArr[0].length / e.target.value))
    
  }

  return (
    <div style={customLength}>
      <label htmlFor='tableLength'>
        {language ? 'Show ' : 'Afficher '}
        <select name='tableLength' className='select__table' onChange={handleChange}>
          <option value='10'>10</option>
          <option value='25'>25</option>
          <option value='50'>50</option>
          <option value='100'>100</option>
        </select>
        {language ? ' entries' : ' entrées'}
      </label>
    </div>
  )
}

TableLength.propTypes = {
  data: PropTypes.array,
  language: PropTypes.bool,
  customLength: PropTypes.object
}

export default TableLength
