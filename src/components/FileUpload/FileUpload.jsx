import React, { useState } from 'react';

/**
 * FileUpload Component
 * Allows users to upload files, displays the uploaded file location, and provides a download link.
 */
const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null); // State to store the selected file
  const [uploadedFileUrl, setUploadedFileUrl] = useState(null); // State to store the uploaded file URL

  /**
   * Handles file selection from the input field.
   * @param {Event} event - The file input change event.
   */
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  /**
   * Handles the file upload process.
   * Simulates an upload by generating a URL for the uploaded file.
   */
  const handleFileUpload = () => {
    if (selectedFile) {
      // Simulate file upload and generate a URL
      const fakeUploadUrl = URL.createObjectURL(selectedFile);
      setUploadedFileUrl(fakeUploadUrl); // Set the uploaded file URL
      alert('File uploaded successfully!');
      setSelectedFile(null); // Reset the selected file
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div className="container mt-5">
      <h2>File Upload</h2>
      <div className="mb-3">
        <label htmlFor="fileInput" className="form-label">
          Select a file to upload:
        </label>
        <input
          type="file"
          id="fileInput"
          className="form-control"
          onChange={handleFileChange}
        />
      </div>
      <button
        className="btn btn-primary"
        onClick={handleFileUpload}
        disabled={!selectedFile}
      >
        Upload File
      </button>

      {uploadedFileUrl && (
        <div className="mt-4">
          <h4>Uploaded File Details:</h4>
          <p>
            <strong>File Location:</strong>{' '}
            <a href={uploadedFileUrl} download>
              {uploadedFileUrl}
            </a>
          </p>
          <p>
            <strong>Download Link:</strong>{' '}
            <a href={uploadedFileUrl} download>
              Click here to download
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default FileUpload;