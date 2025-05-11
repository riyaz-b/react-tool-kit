import React, { useState, useEffect } from 'react';

const PaginationMenu = () => {
  const [data, setData] = useState([]); // Store the fetched data
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [searchTerm, setSearchTerm] = useState(''); // Search term
  const rowsPerPage = 8; // Number of rows per page

  // Fetch data from a dummy API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const result = await response.json();
      setData(result); // Set the fetched data
    };
    fetchData();
  }, []);

  // Filter data based on the search term
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the data to display on the current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  // Handle next and previous page clicks
  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredData.length / rowsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Pagination Menu</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
              <td>{item.userId}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-between">
        <button
          className="btn btn-primary"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(filteredData.length / rowsPerPage)}
        </span>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(filteredData.length / rowsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationMenu;