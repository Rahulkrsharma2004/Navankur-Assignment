import React from 'react';
import { useParams } from 'react-router-dom';
import { useJobs } from '../context/JobContext';

const JobDetails = () => {
  const { id } = useParams();
  const { jobs } = useJobs();
  const job = jobs.find((job) => job._id === id);

  if (!job) return <p>Job not found</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-600">{job.location}</p>
      <p className="text-gray-600">{job.type}</p>
      <p className="mt-4">{job.description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;