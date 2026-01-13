'use client'

import { useState, useEffect } from 'react'

interface GlossaryTerm {
  term: string;
  definition: string;
}

export default function Glossary() {
  const [glossary, setGlossary] = useState<GlossaryTerm[]>([]);

  useEffect(() => {
    fetch('/data/glossary.json')
      .then((response) => response.json())
      .then((data) => setGlossary(data));
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Glossary of Terms</h1>
      <div className="space-y-4">
        {glossary.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4">
            <h2 className="text-xl font-bold">{item.term}</h2>
            <p className="text-gray-600">{item.definition}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
