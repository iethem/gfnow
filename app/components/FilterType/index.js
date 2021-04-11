/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/**
 *
 * FilterType
 *
 */

import React, { memo, useState } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function FilterCheckbox({ filter, checked, onChange }) {
  return (
    <label className="checkbox-container">
      {filter}
      <input
        type="checkbox"
        name={filter}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkmark" />
    </label>
  );
}

function FilterType({ title, filters, selectedFilters, onFilterSelect }) {
  const [filterOpen, setFilterOpen] = useState(true);

  return (
    <div className="filter-type">
      <div className="filter-type-title">
        <span>{title}</span>
        <div
          className={`icon-arrow ${!filterOpen && 'down'}`}
          onClick={() => setFilterOpen(!filterOpen)}
        />
      </div>
      <div className={`filter-type-body ${!filterOpen && 'hide'}`}>
        {filters.map(filter => (
          <FilterCheckbox
            filter={filter}
            checked={selectedFilters.includes(filter)}
            onChange={onFilterSelect}
          />
        ))}
      </div>
    </div>
  );
}

FilterType.propTypes = {};

export default memo(FilterType);
