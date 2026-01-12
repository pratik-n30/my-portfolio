import fs from 'fs';
import path from 'path';

// 1. Define where our "Closet" is
const contentDirectory = path.join(process.cwd(), 'content');

// --- TIMELINE LOGIC ---

export function getTimelineData() {
  const filePath = path.join(contentDirectory, 'timeline', 'data.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContents);
}

// --- PROJECT LOGIC ---

// Get list of all project folders (e.g., ["sentitrader", "other-project"])
// Get list of all project folders
export function getAllProjects() {
  const projectsDir = path.join(contentDirectory, 'projects');
  
  // 1. Read the directory
  const items = fs.readdirSync(projectsDir);

  // 2. Filter: Only keep folders that actually contain a project.json
  const folders = items.filter(item => {
    const fullPath = path.join(projectsDir, item);
    // Check if it is a folder AND has project.json
    return fs.statSync(fullPath).isDirectory() && 
           fs.existsSync(path.join(fullPath, 'project.json'));
  });

  // 3. Process the valid folders
  const projects = folders.map(folder => {
    const metadataPath = path.join(projectsDir, folder, 'project.json');
    const metadataContent = fs.readFileSync(metadataPath, 'utf8');
    return JSON.parse(metadataContent);
  });

  return projects;
}

// Get details for ONE specific project
export function getProjectData(slug: string) {
  const projectDir = path.join(contentDirectory, 'projects', slug);
  
  // 1. Read Metadata
  const metadata = JSON.parse(fs.readFileSync(path.join(projectDir, 'project.json'), 'utf8'));
  
  // 2. Read README
  const readme = fs.readFileSync(path.join(projectDir, 'README.md'), 'utf8');
  
  // 3. Read Code Files (Simple version: just grabbing main.py for now)
  // We can make this recursive later to grab ALL files
  let code = "";
  try {
    code = fs.readFileSync(path.join(projectDir, 'src', 'main.py'), 'utf8');
  } catch (e) {
    code = "# No main.py found";
  }

  return {
    metadata,
    readme,
    code
  };
}