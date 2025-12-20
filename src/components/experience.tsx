import { resumeData } from '@/lib/data';

export function Experience() {
  return (
    <section id="experience">
      <h2 className="font-stencil text-3xl font-bold tracking-wider">
        Logistics &amp; Ops Archive
      </h2>
      <div className="relative mt-6 pl-6">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-border"></div>
        <div className="space-y-12">
          {resumeData.history.map((job, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-[37px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-background">
                <div className="h-3 w-3 rounded-full bg-accent"></div>
              </div>
              <p className="text-sm font-mono text-muted-foreground">{job.dates}</p>
              <h3 className="text-xl font-semibold font-tactical">{job.role}</h3>
              <p className="font-medium text-primary/80 font-tactical">{job.company}</p>
              <p className="mt-2 text-muted-foreground">{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
