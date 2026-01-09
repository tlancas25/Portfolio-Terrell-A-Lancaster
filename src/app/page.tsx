import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
// import { ResumeAgent } from '@/components/resume-agent';
import { Footer } from '@/components/footer';
import { projectsData } from '@/lib/data';

export default function Home() {
  // Reverting to manual data to avoid displaying sensitive GitHub projects until they are audited.
  // The 'projectsData' import contains the manually curated list.
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          <Hero />
          <About />
          <Skills />
          <Projects projects={projectsData} />
          <Experience />
          {/* <ResumeAgent /> */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
