import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating() {
  const createArray = (length) => [...Array(length)];
  function Star({ selected = false }) {
    return <FaStar color={selected ? 'red' : 'gray'} />;
  }
  function StarRating({ totalStars = 5 }) {
    return createArray(totalStars).map((n, i) => <Star key={i} />);
  }
}
