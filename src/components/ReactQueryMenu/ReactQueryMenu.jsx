import React from 'react';
import { useQuery } from 'react-query';

/**
 * ReactQueryMenu Component
 * Demonstrates the use of React Query's `useQuery` hook.
 */
const ReactQueryMenu = () => {
  // Fetch data using React Query
  const { data, isLoading, error } = useQuery('exampleData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h2>React Query Menu</h2>
      <ul>
        {data.slice(0, 10).map((item) => (
          <li key={item.id}>
            <strong>{item.title}</strong>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReactQueryMenu;