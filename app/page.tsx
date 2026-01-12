import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-4 md:p-8 font-sans flex flex-col justify-center">
      
      {/* CHANGE: Removed 'max-w-6xl' and replaced with 'w-full max-w-[95%]' 
         This forces the grid to stretch across your entire landscape monitor.
      */}
      <div className="w-full max-w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 h-[85vh]">
        
        {/* 1. THE PROFILE CARD (Left Column - Text Only) */}
        <div className="lg:col-span-1 bg-white text-black rounded-3xl p-10 flex flex-col justify-between border border-gray-200 shadow-2xl relative overflow-hidden h-full">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-orange-200 rounded-full blur-3xl -mr-20 -mt-20 opacity-60"></div>

          <div className="mt-4">
            <h5 className="text-gray-500 font-bold tracking-wider uppercase text-sm mb-6">Portfolio</h5>
            
            <h1 className="text-6xl xl:text-8xl font-extrabold tracking-tight mb-6 leading-[0.9]">
              Pratik <br /> Nawale
            </h1>
            
            <div className="h-3 w-32 bg-orange-500 mb-10 rounded-full"></div>
            
            <p className="text-2xl xl:text-3xl text-gray-700 leading-relaxed font-medium max-w-md">
              <span className="text-black font-bold">Quant and AI Developer</span>. <br />
              Specializing in <br/> Reinforcement Learning & Algo-Trading.
            </p>
          </div>

          {/* Social Icons / Links */}
          <div className="flex flex-col gap-4 mb-4">
            <a 
              href="https://github.com/pratik-n30" 
              target="_blank" 
              className="flex items-center justify-between px-8 py-5 bg-black text-white rounded-2xl hover:bg-gray-800 transition group text-lg"
            >
              <span className="font-bold">GitHub Profile</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
            <a 
              href="mailto:your-email@example.com" 
              className="flex items-center justify-between px-8 py-5 bg-gray-100 text-black rounded-2xl hover:bg-gray-200 transition group text-lg"
            >
              <span className="font-bold">Contact Me</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </a>
          </div>
        </div>

        {/* 2. THE RIGHT SIDE (Stats + Cards) */}
        <div className="lg:col-span-2 flex flex-col gap-6 h-full">
          
          {/* Top Row: STATS (Made taller to fill space) */}
          <div className="grid grid-cols-3 gap-6 h-1/3">
            <div className="bg-neutral-900 rounded-3xl flex flex-col justify-center items-center text-center border border-neutral-800 hover:bg-neutral-800 transition">
              <h2 className="text-5xl xl:text-7xl font-bold text-white mb-2">C++</h2>
              <p className="text-gray-400 text-sm xl:text-lg uppercase tracking-wider">Core Focus</p>
            </div>
            <div className="bg-neutral-900 rounded-3xl flex flex-col justify-center items-center text-center border border-neutral-800 hover:bg-neutral-800 transition">
              <h2 className="text-5xl xl:text-7xl font-bold text-white mb-2">10+</h2>
              <p className="text-gray-400 text-sm xl:text-lg uppercase tracking-wider">RL Models</p>
            </div>
            <div className="bg-neutral-900 rounded-3xl flex flex-col justify-center items-center text-center border border-neutral-800 hover:bg-neutral-800 transition">
              <h2 className="text-5xl xl:text-7xl font-bold text-white mb-2">VNIT</h2>
              <p className="text-gray-400 text-sm xl:text-lg uppercase tracking-wider">Scholar</p>
            </div>
          </div>

          {/* Bottom Row: COLORED CARDS (Fills remaining height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-2/3">
            
            {/* Orange Card */}
            <Link href="/projects" className="group bg-orange-500 rounded-3xl p-10 flex flex-col justify-between transition transform hover:scale-[1.01] border-none">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4 text-white text-4xl">
                📈
              </div>
              <div>
                <h3 className="text-4xl font-bold text-white mb-4">Quant Finance</h3>
                <p className="text-orange-100 font-medium text-xl leading-relaxed">
                  Algorithmic trading strategies, SentiTrader, and market analysis tools.
                </p>
              </div>
              <div className="flex justify-end">
                <span className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold text-base shadow-lg group-hover:shadow-xl transition">View Projects &rarr;</span>
              </div>
            </Link>

            {/* Lime Card */}
            <div className="bg-lime-400 rounded-3xl p-10 flex flex-col justify-between text-black">
              <div className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center mb-4 text-black text-4xl">
                💻
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-3">
                   <span className="px-4 py-2 bg-lime-500/30 rounded-xl font-bold text-lg">Python</span>
                   <span className="px-4 py-2 bg-lime-500/30 rounded-xl font-bold text-lg">PyTorch</span>
                   <span className="px-4 py-2 bg-lime-500/30 rounded-xl font-bold text-lg">Next.js</span>
                   <span className="px-4 py-2 bg-lime-500/30 rounded-xl font-bold text-lg">CUDA</span>
                   <span className="px-4 py-2 bg-lime-500/30 rounded-xl font-bold text-lg">Pandas</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>
  );
}