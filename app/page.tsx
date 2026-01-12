import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-black to-gray-900 text-white">
      
      <div className="max-w-4xl w-full text-center space-y-8">
        
        {/* Profile / Intro */}
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
          Pratik Nawale
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Student at VNIT. <br />
          Obsessed with <span className="text-white font-semibold">Finance</span>, <span className="text-white font-semibold">Reinforcement Learning</span>, and Artifical Intelligence.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
          <Link 
            href="/projects" 
            className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            View My Work
          </Link>
          
          <a 
            href="https://github.com/pratik-n30" 
            target="_blank" 
            className="px-8 py-4 border border-gray-700 text-gray-300 font-bold rounded-lg hover:bg-gray-800 transition-all"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Footer / Tech Stack */}
      <div className="absolute bottom-10 text-gray-600 text-sm">
        <p>Built with Next.js 15 • Tailwind • TypeScript</p>
      </div>

    </main>
  );
}