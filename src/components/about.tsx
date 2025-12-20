import { resumeData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about">
      <h2 className="font-headline text-3xl font-bold tracking-tight">
        About
      </h2>
      <p className="mt-4 text-lg text-muted-foreground">{resumeData.summary}</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold tracking-tight">
          Certifications
        </h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {resumeData.certifications.map((cert) => (
            <Badge key={cert} variant="secondary" className="gap-1.5 py-1 pr-3 text-sm">
                <CheckCircle2 className="h-4 w-4 text-accent" />
                {cert}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
