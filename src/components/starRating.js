import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function StarRatings({ totalStars = 5 }) {
  const createArray = (length) => [...Array(length)];
  function Star({ selected = false }) {
    return <FontAwesomeIcon icon={faStar} color={selected ? 'red' : 'gray'} />;
  }

  return createArray(totalStars).map((n, i) => <Star key={i} />);
}
