import React, { useState } from 'react';
import usePrevious from '../../hooks/usePrevious'; // Corrected path
import './CustomHookDemo.css';

/**
 * CustomHookDemo Component
 * Demonstrates the use of the `usePrevious` custom hook.
 */
const CustomHookDemo = () => {
  const [count, setCount] = useState(0); // State to track the current count
  const previousCount = usePrevious(count); // Use the custom hook to track the previous count

  return (
    <div className="custom-hook-demo">
      <h2>Custom Hook: usePrevious</h2>
      <p>
        <strong>Current Count:</strong> {count}
      </p>
      <p>
        <strong>Previous Count:</strong> {previousCount !== undefined ? previousCount : 'N/A'}
      </p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default CustomHookDemo;