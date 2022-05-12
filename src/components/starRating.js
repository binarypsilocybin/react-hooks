import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function StarRatings({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  const createArray = (length) => [...Array(length)];
  function Star({ selected = false, onSelect }) {
    return (
      <FontAwesomeIcon
        icon={faStar}
        color={selected ? 'red' : 'gray'}
        onClick={onSelect}
      />
    );
  }

  return (
    <>
      {createArray(totalStars).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      ;
      <p>
        {selectedStars} of {totalStars}
      </p>
    </>
  );
}
