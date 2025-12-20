import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Projects } from '@/components/projects';
import { Experience } from '@/components/experience';
import { ResumeAgent } from '@/components/resume-agent';
import { Footer } from '@/components/footer';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="container mx-auto flex-1 px-4 py-8 md:px-6">
        <div className="mx-auto max-w-4xl space-y-16">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <ResumeAgent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
