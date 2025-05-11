import { useEffect, useRef } from 'react';

/**
 * Custom Hook: usePrevious
 * Tracks the previous value of a state or prop.
 *
 * @param {any} value - The current value to track.
 * @returns {any} - The previous value.
 */
const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value; // Update the ref with the current value
  });

  return ref.current; // Return the previous value
};

export default usePrevious;