"use client"; // This makes the buttons clickable

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectViewer({ project }: { project: any }) {
  const [activeTab, setActiveTab] = useState<'readme' | 'code'>('readme');

  return (
    <div className="max-w-5xl mx-auto pt-20">
      
      {/* Header */}
      <div className="mb-8">
        <Link href="/projects" className="text-gray-400 hover:text-white mb-4 inline-block">
          ← Back to Projects
        </Link>
        <h1 className="text-4xl font-bold text-white mb-2">{project.metadata.title}</h1>
        <p className="text-gray-400">{project.metadata.description}</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-800 mb-6">
        <button
          onClick={() => setActiveTab('readme')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'readme' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          README.md
        </button>
        <button
          onClick={() => setActiveTab('code')}
          className={`px-6 py-3 font-medium transition-colors ${
            activeTab === 'code' ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-500 hover:text-gray-300'
          }`}
        >
          Source Code
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 min-h-[400px] overflow-x-auto">
        {activeTab === 'readme' ? (
          <pre className="whitespace-pre-wrap font-sans text-gray-300">
            {project.readme}
          </pre>
        ) : (
          <pre className="text-sm font-mono text-green-400">
            <code>{project.code}</code>
          </pre>
        )}
      </div>
    </div>
  );
}