import { getTimelineData } from '../../lib/api'; // <--- Importing the Waiter

export default function Timeline() {
  
  // 1. The Order: Ask the Waiter for the list of events
  const events = getTimelineData();

  return (
    <main className="min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">My Journey</h1>
      
      <div className="max-w-2xl mx-auto border-l-2 border-gray-800 ml-4 md:ml-auto space-y-12">
        
        {/* 2. The Meal: We loop through the data the waiter brought back */}
        {events.map((event: any, index: number) => (
          <div key={index} className="relative pl-8">
            
            {/* The Dot on the line */}
            <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-blue-600 ring-4 ring-black" />
            
            {/* The Card */}
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-blue-500/50 transition-all">
              <span className="text-sm text-blue-400 font-mono mb-2 block">
                {event.year}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">
                {event.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {event.description}
              </p>
              
              <span className="inline-block mt-4 text-xs font-medium px-2 py-1 rounded bg-gray-800 text-gray-300 uppercase tracking-wider">
                {event.type}
              </span>
            </div>
          </div>
        ))}
        
      </div>
    </main>
  );
}