import React, { useState, useEffect } from 'react';

const DRAFT_KEY = 'jobFormDraft';

export default function JobFormModal({ onClose, onCreate }) {
    const [form, setForm] = useState({
        title: '',
        companyName: '',
        location: '',
        jobType: '',
        salaryMin: '',
        salaryMax: '',
        applicationDeadline: '',
        description: '',
    });

    // 1) load draft on mount
    useEffect(() => {
        const draft = localStorage.getItem(DRAFT_KEY);
        if (draft) {
            try {
                setForm(JSON.parse(draft));
            } catch {
                localStorage.removeItem(DRAFT_KEY);
            }
        }
    }, []);

    const handleChange = e => {
        const { name, value } = e.target;
        setForm(f => ({ ...f, [name]: value }));
    };

    // save draft button
    const handleSaveDraft = () => {
        localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
        // alert('Draft saved locally')
        onClose();
    };

    // publish clears draft
    const handleSubmit = async e => {
        e.preventDefault();
        const res = await fetch('http://localhost:3000/api/jobs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form),
        });
        if (!res.ok) {
            alert('Failed to publish job');
            return;
        }
        const newJob = await res.json();
        // clear draft
        localStorage.removeItem(DRAFT_KEY);
        onCreate(newJob);
        onClose();
    };

    return (
        <div className="fixed inset-0 backdrop-brightness-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-modal w-[90%] max-w-3xl p-8">
                <h2 className="text-xl font-semibold mb-6 text-center">Create Job Opening</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* two-column grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input
                            name="title"
                            onChange={handleChange}
                            value={form.title}
                            placeholder="Job Title"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            required
                        />
                        <input
                            name="companyName"
                            onChange={handleChange}
                            value={form.companyName}
                            placeholder="Company Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            required
                        />
                        <input
                            name="location"
                            onChange={handleChange}
                            value={form.location}
                            placeholder="Location"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            required
                        />
                        <select
                            name="jobType"
                            onChange={handleChange}
                            value={form.jobType}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            required
                        >
                            <option value="" disabled>Job Type</option>
                            <option>Full-time</option>
                            <option>Part-time</option>
                            <option>Contract</option>
                            <option>Internship</option>
                        </select>
                    </div>

                    {/* salary + deadline */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input
                            name="salaryMin"
                            type="number"
                            onChange={handleChange}
                            value={form.salaryMin}
                            placeholder="₹ Min Salary"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            required
                        />
                        <input
                            name="salaryMax"
                            type="number"
                            onChange={handleChange}
                            value={form.salaryMax}
                            placeholder="₹ Max Salary"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            required
                        />
                        <input
                            name="applicationDeadline"
                            type="date"
                            onChange={handleChange}
                            value={form.applicationDeadline}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                            required
                        />
                    </div>

                    {/* description */}
                    <textarea
                        name="description"
                        onChange={handleChange}
                        value={form.description}
                        rows="4"
                        placeholder="Please share a description to let the candidate know more about the job role"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none resize-none"
                    />

                    {/* buttons */}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            onClick={handleSaveDraft}
                            className="px-6 py-2 border cursor-pointer border-gray-700 rounded-lg hover:bg-gray-100 transition"
                        >
                            Save Draft ↓
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-2 bg-[#00AAFF] cursor-pointer text-white rounded-lg transition"
                        >
                            Publish »
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
