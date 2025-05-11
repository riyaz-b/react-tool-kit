import React, { useState, useEffect } from 'react';
import './UseEffectDemo.css';

/**
 * UseEffectDemo Component
 * Demonstrates the use of the `useEffect` Hook for side effects like fetching data.
 */
const UseEffectDemo = () => {
  const [data, setData] = useState([]); // State to store fetched data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  /**
   * Fetch data from an API when the component mounts
   * This demonstrates the use of `useEffect` for side effects.
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result.slice(0, 10)); // Limit to 10 items for simplicity
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function (optional in this case)
    return () => {
      console.log('Cleanup on component unmount');
    };
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="use-effect-demo">
      <h2>Posts</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectDemo;