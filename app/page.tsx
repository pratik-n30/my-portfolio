import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 md:p-12 flex items-center justify-center">
      
      {/* w-full = Use 100% of available width
         max-w-[1600px] = Stop growing only on massive 4k screens
      */}
      <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-2 gap-6 h-[85vh]">
        
        {/* LEFT COLUMN: Identity (Clean, White, Simple) */}
        <div className="bg-white text-black rounded-3xl p-12 flex flex-col justify-center shadow-2xl relative overflow-hidden">
          
          <div className="z-10">
            <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-6 leading-none">
              Pratik <br /> Nawale
            </h1>
            
            <div className="h-4 w-32 bg-orange-500 mb-8"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quant Developer.
            </h2>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              Building autonomous agents and high-frequency trading systems with Reinforcement Learning.
            </p>
          </div>

          {/* Decorative Blur (Optional, subtle) */}
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-200 rounded-full blur-3xl opacity-50"></div>
        </div>

        {/* RIGHT COLUMN: Navigation (Big, Bold Buttons) */}
        <div className="flex flex-col gap-6 h-full">
          
          {/* Top Block: PROJECTS (Orange) */}
          <Link 
            href="/projects" 
            className="group flex-1 bg-orange-600 rounded-3xl p-12 flex flex-col justify-center transition hover:bg-orange-500 relative overflow-hidden"
          >
            <div className="z-10">
              <h3 className="text-5xl md:text-7xl font-bold mb-4">Work</h3>
              <p className="text-xl text-orange-100 max-w-md">
                View my case studies on SentiTrader, RL Agents, and Financial Modeling.
              </p>
            </div>
            {/* Arrow Icon */}
            <div className="absolute bottom-10 right-10 text-6xl group-hover:translate-x-4 transition transform">
              →
            </div>
          </Link>

          {/* Bottom Block: GITHUB (Dark Gray) */}
          <a 
            href="https://github.com/pratik-n30" 
            target="_blank" 
            className="group flex-1 bg-neutral-900 rounded-3xl p-12 flex flex-col justify-center transition hover:bg-neutral-800 border border-neutral-800 relative"
          >
            <div className="z-10">
              <h3 className="text-5xl md:text-7xl font-bold mb-4 text-white">Code</h3>
              <p className="text-xl text-gray-400 max-w-md">
                Explore my raw source code, algorithms, and repositories.
              </p>
            </div>
             {/* Arrow Icon */}
             <div className="absolute bottom-10 right-10 text-6xl text-white group-hover:translate-x-4 transition transform">
              ↗
            </div>
          </a>

        </div>
      </div>

    </main>
  );
}