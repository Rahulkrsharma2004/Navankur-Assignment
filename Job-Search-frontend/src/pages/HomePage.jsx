import React from 'react';
import { useJobs } from '../context/JobContext';
import JobListing from '../components/JobListing';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  const { jobs, loading } = useJobs();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
      <SearchBar onSearch={(query) => console.log('Search:', query)} />
      {jobs.map((job) => (
        <JobListing key={job._id} job={job} />
      ))}
    </div>
  );
};

export default HomePage;