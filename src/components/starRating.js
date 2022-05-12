import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function StarRatings({ totalStars }) {
  const createArray = (length) => [...Array(length)];
  function Star() {
    return <FontAwesomeIcon icon={faStar} />;
  }

  return createArray(totalStars).map((n, i) => <Star key={i} />);
}
