import { getProjectData, getAllProjects } from '../../../lib/api';
import ProjectViewer from '@/components/ProjectViewer';

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project: any) => ({
    slug: project.id,
  }));
}

// UPDATE: We changed 'params' to be a Promise
type Props = {
  params: Promise<{ slug: string }>
}

export default async function ProjectPage({ params }: Props) {
  // 1. Await the params to get the actual slug
  const resolvedParams = await params; 
  const slug = resolvedParams.slug;

  // 2. Now we can safely get the data
  const data = getProjectData(slug);

  return (
    <main className="min-h-screen p-6">
      <ProjectViewer project={data} />
    </main>
  );
}