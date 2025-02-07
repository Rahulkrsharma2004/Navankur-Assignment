import React from 'react';

const JobListing = ({ job }) => {
  return (
    <div className="border p-4 mb-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{job.title}</h3>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-600">{job.type}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobListing;