import React, { useState, useEffect } from 'react';
import JobListPage from './pages/JobListPage';
import JobFormModal from './components/JobFormModal';

function App() {
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/api/jobs')
      .then(r => r.json())
      .then(setJobs)
      .catch(() => { });
  }, []);

  const handleCreate = (newJob) => {
    setJobs(j => [newJob, ...j]);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <header className="bg-white py-4 ">
        <div className="container mx-auto flex items-center justify-between px-6 shadow-xl p-2 py-5 rounded-4xl">
          <div className="flex items-center space-x-8">
            <img src={"data:image/jpeg;base64,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"} alt="Logo" className="h-8" />
            {["Home", "Find Jobs", "Find Talents", "About us", "Testimonials"].map(link => (
              // <Link to={"#"}>{link}</Link>
              <a key={link} href="#" className="text-gray-700 hover:text-gray-900">{link}</a>
            ))}
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-gradient-to-r from-purple-500 to-indigo-700 cursor-pointer text-white px-6 py-2 rounded-full shadow"
          >
            Create Jobs
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <JobListPage />
      </main>

      {modalOpen && (
        <JobFormModal
          onClose={() => setModalOpen(false)}
          onCreate={handleCreate}
        />
      )}
    </div>
  );
}

export default App;
