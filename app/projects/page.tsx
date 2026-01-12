import Link from 'next/link';
import { getAllProjects } from '../../lib/api'; 

export default function ProjectsPage() {
  
  // 1. Get all projects
  const projects = getAllProjects();

  return (
    <main className="min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold mb-12 text-center text-white">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        
        {/* 2. Loop through projects and make cards */}
        {projects.map((project: any) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.id}`} // This links to the detail page 
            className="block group"
          >
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-full hover:border-blue-500 transition-all">
              
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                {/* Arrow Icon */}
                <span className="text-gray-600 group-hover:text-blue-500">→</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                {project.description}
              </p>
              
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech: string) => (
                  <span 
                    key={tech} 
                    className="text-xs font-mono text-blue-300 bg-blue-900/30 px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </Link>
        ))}

      </div>
    </main>
  );
}