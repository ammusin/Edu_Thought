/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';

export default function Page() {
  const [topic, setTopic] = useState('');
  const [persona, setPersona] = useState('Teacher');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const personas = [
    'Teacher',
    '8-Year-Old',
    'Farmer',
    'Monk',
    'Scientist',
    'Historical Figure',
  ];

  const handleSubmit = async () => {
    if (!topic) return alert("Please enter a topic!");

    setLoading(true);
    setResponse('Thinking...');

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic, persona }),
    });

    const data = await res.json();
    setResponse(data.result);
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4 text-center text-blue-800">🎓 EduThought</h1>
      <p className="mb-8 text-gray-800 text-center max-w-xl text-lg">
        Understand any topic through the eyes of a Monk, a Teacher, a Child or even a Farmer.
      </p>

      <div className="w-full max-w-xl flex flex-col gap-4">
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter any topic (e.g., Democracy, Photosynthesis)"
          className="p-3 border border-gray-300 rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <select
          value={persona}
          onChange={(e) => setPersona(e.target.value)}
          className="p-3 border border-gray-300 rounded-xl text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {personas.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition font-semibold"
          disabled={loading}
        >
          {loading ? 'Simulating...' : 'Simulate Worldview'}
        </button>

        {response && (
          <div className="bg-white shadow-md p-4 rounded-xl border border-gray-200 mt-4 max-h-[350px] overflow-y-auto w-full">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">🧠 AI's Perspective:</h2>
            <p
              className="text-lg leading-relaxed whitespace-pre-wrap"
              style={{ color: '#000000' }}
            >
              {response}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
