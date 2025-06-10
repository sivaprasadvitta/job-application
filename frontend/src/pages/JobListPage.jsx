import React, { useState, useEffect, useMemo } from 'react';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import JobCard from '../components/JobCard';
import { getTimeAgo } from '../utils/timeAgo';

export default function JobListPage() {
  const [jobs, setJobs] = useState([]);

  // filter states
  const [searchText, setSearchText]     = useState('');
  const [locationText, setLocationText] = useState('');
  const [jobType, setJobType]           = useState('');
  const [salaryRange, setSalaryRange]   = useState([0, 100]);

  useEffect(() => {
    fetch('http://localhost:3000/api/jobs')
      .then(r => r.json())
      .then(data => {
        setJobs(data.map(job => ({ ...job, postedAgo: getTimeAgo(job.createdAt) })));
      });
  }, []);

  // derive filtered list
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      // title match
      if (searchText && !job.title.toLowerCase().includes(searchText.toLowerCase())) {
        return false;
      }
      // location match
      if (locationText && !job.location.toLowerCase().includes(locationText.toLowerCase())) {
        return false;
      }
      // jobType match
      if (jobType && job.jobType !== jobType) {
        return false;
      }
      // salary overlap
      const [minS, maxS] = salaryRange;
      if (job.salaryMin > maxS * 1000 || job.salaryMax < minS * 1000) {
        return false;
      }
      return true;
    });
  }, [jobs, searchText, locationText, jobType, salaryRange]);

  return (
    <>
      {/* Filters Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 items-center">
        {/* Job Title */}
        <div className="relative">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            type="text"
            placeholder="Search By Job Title, Role"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
          />
        </div>

        {/* Location */}
        <div className="relative">
          <MapPinIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            value={locationText}
            onChange={e => setLocationText(e.target.value)}
            type="text"
            placeholder="Preferred Location"
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
          />
        </div>

        {/* Job Type */}
        <div className="relative">
          <ChevronDownIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <select
            value={jobType}
            onChange={e => setJobType(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none"
          >
            <option value="">All Types</option>
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
            <option>Internship</option>
          </select>
        </div>

        {/* Salary Range */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">₹{salaryRange[0]}k</span>
          {/* <input
            type="range"
            min="0"
            max="200"
            value={salaryRange[0]}
            onChange={e =>
              setSalaryRange([+e.target.value, salaryRange[1]])
            }
            className="flex-1"
          /> */}
          <input
            type="range"
            min="0"
            max="200"
            value={salaryRange[1]}
            onChange={e =>
              setSalaryRange([salaryRange[0], +e.target.value])
            }
            className="flex-1"
          />
          <span className="text-gray-600">₹{salaryRange[1]}k</span>
        </div>
      </div>

      {/* Job grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredJobs.map(job => (
          <JobCard key={job._id} job={job} />
        ))}
        {filteredJobs.length === 0 && (
          <p className="col-span-full text-center text-gray-500">
            No jobs match your filters.
          </p>
        )}
      </div>
    </>
  );
}
