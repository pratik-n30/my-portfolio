import Link from 'next/link';

export default function Home() {
  return (
    // 'p-6' adds a small safe zone so text doesn't hit the monitor edge
    <div className="w-full min-h-[calc(100vh-80px)] p-6 md:p-10 flex flex-col justify-center">
      
      {/* Grid: 2 Columns. 
          Standard Screen: 50% / 50% split. 
          Mobile: Stacked.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full h-full lg:h-[80vh]">
        
        {/* LEFT CARD: Identity */}
        <div className="bg-white text-black rounded-[2rem] p-12 flex flex-col justify-center relative shadow-2xl">
          <h1 className="text-8xl xl:text-9xl font-extrabold tracking-tighter leading-none mb-6">
            Pratik <br /> Nawale
          </h1>
          
          <div className="h-4 w-32 bg-orange-600 mb-8"></div>
          
          <h2 className="text-4xl font-bold mb-6 tracking-tight">
            AI Engineer
          </h2>
          
          <p className="text-2xl text-gray-600 max-w-xl font-medium leading-relaxed">
            Building autonomous agents and high-frequency trading systems. 
            <br/><span className="text-gray-400 text-lg mt-2 block">Based in Nashik • Focused on RL & Finance</span>
          </p>
        </div>

        {/* RIGHT COLUMN: Navigation */}
        <div className="flex flex-col gap-6 h-full">
          
          {/* Top: WORK (Orange) */}
          <Link 
            href="/projects" 
            className="group relative bg-orange-600 rounded-[2rem] p-12 flex flex-col justify-center flex-1 transition-all hover:bg-orange-500 hover:scale-[1.01]"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-7xl font-bold text-white">Work</h3>
              <span className="text-5xl text-orange-200 group-hover:rotate-45 transition duration-300">→</span>
            </div>
            <p className="text-2xl text-orange-100 mt-6 max-w-lg">
              Case studies on SentiTrader, Reinforcement Learning Agents, and Financial Modeling.
            </p>
          </Link>

          {/* Bottom: CODE (Dark) */}
          <a 
            href="https://github.com/pratik-n30" 
            target="_blank" 
            className="group relative bg-neutral-900 rounded-[2rem] p-12 flex flex-col justify-center flex-1 transition-all hover:bg-neutral-800 border border-neutral-800 hover:scale-[1.01]"
          >
            <div className="flex justify-between items-start">
              <h3 className="text-7xl font-bold text-white">Code</h3>
              <span className="text-5xl text-gray-500 group-hover:text-white group-hover:translate-x-2 transition duration-300">↗</span>
            </div>
            <p className="text-2xl text-gray-400 mt-6 max-w-lg">
              Explore my raw source code, algorithms, and GitHub repositories.
            </p>
          </a>

        </div>
      </div>
    </div>
  );
}