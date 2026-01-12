import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6 md:p-12 font-sans flex flex-col justify-center">
      
      {/* Main Grid Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. THE PROFILE CARD (Left Column - Text Only) */}
        <div className="md:col-span-1 bg-white text-black rounded-3xl p-10 flex flex-col justify-between min-h-[450px] border border-gray-200 shadow-2xl relative overflow-hidden">
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-200 rounded-full blur-3xl -mr-16 -mt-16 opacity-50"></div>

          <div>
            <h5 className="text-gray-500 font-bold tracking-wider uppercase text-sm mb-4">Portfolio</h5>
            
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
              Pratik <br /> Nawale
            </h1>
            
            <div className="h-2 w-24 bg-orange-500 mb-8 rounded-full"></div>
            
            <p className="text-xl text-gray-700 leading-relaxed font-medium">
              <span className="text-black font-bold">Quant Developer</span> & Strategist. <br />
              Specializing in Reinforcement Learning, Algo-Trading, and High-Performance Systems.
            </p>
          </div>

          {/* Social Icons / Links */}
          <div className="flex flex-col gap-3 mt-8">
            <a 
              href="https://github.com/PratikNawale" 
              target="_blank" 
              className="flex items-center justify-between px-6 py-4 bg-black text-white rounded-xl hover:bg-gray-800 transition group"
            >
              <span className="font-bold">GitHub Profile</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="flex items-center justify-between px-6 py-4 bg-gray-100 text-black rounded-xl hover:bg-gray-200 transition group"
            >
              <span className="font-bold">Contact Me</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
          </div>
        </div>

        {/* 2. THE RIGHT SIDE (Stats + Cards) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          
          {/* Top Row: STATS */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-neutral-800">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-1">C++</h2>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Primary Lang</p>
            </div>
            <div className="bg-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-neutral-800">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-1">10+</h2>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">RL Models</p>
            </div>
            <div className="bg-neutral-900 rounded-3xl p-6 flex flex-col justify-center items-center text-center border border-neutral-800">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-1">VNIT</h2>
              <p className="text-gray-400 text-xs md:text-sm uppercase tracking-wider">Scholar</p>
            </div>
          </div>

          {/* Bottom Row: COLORED CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full grow">
            
            {/* Orange Card - Focus Area */}
            <Link href="/projects" className="group bg-orange-500 rounded-3xl p-8 flex flex-col justify-between transition transform hover:scale-[1.02] min-h-[250px]">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white text-3xl">
                📈
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">Quant Finance</h3>
                <p className="text-orange-100 font-medium">
                  Algorithmic trading strategies, SentiTrader, and market analysis tools.
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <span className="bg-white text-orange-600 px-5 py-2 rounded-full font-bold text-sm shadow-lg group-hover:shadow-xl transition">View Work &rarr;</span>
              </div>
            </Link>

            {/* Lime/Green Card - Tech Stack */}
            <div className="bg-lime-400 rounded-3xl p-8 flex flex-col justify-between text-black min-h-[250px]">
              <div className="w-14 h-14 bg-black/10 rounded-full flex items-center justify-center mb-4 text-black text-3xl">
                💻
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                   <span className="px-3 py-1 bg-lime-500/30 rounded-lg font-bold">Python</span>
                   <span className="px-3 py-1 bg-lime-500/30 rounded-lg font-bold">PyTorch</span>
                   <span className="px-3 py-1 bg-lime-500/30 rounded-lg font-bold">Next.js</span>
                   <span className="px-3 py-1 bg-lime-500/30 rounded-lg font-bold">CUDA</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}