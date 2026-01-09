import { resumeData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import Script from 'next/script';

export function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
      <div>
        <h2 className="font-stencil text-3xl font-bold tracking-wider">
          About
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">{resumeData.summary}</p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold tracking-tight font-tactical">
            Certifications
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {resumeData.certifications.map((cert) => (
              <Badge key={cert} variant="secondary" className="gap-1.5 py-1 pr-3 text-sm font-mono">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end mt-6 md:mt-0">
        <div 
            className="badge-base LI-profile-badge" 
            data-locale="en_US" 
            data-size="large" 
            data-theme="dark" 
            data-type="VERTICAL" 
            data-vanity="tlancas" 
            data-version="v1"
        >
            <a 
                className="badge-base__link LI-simple-link" 
                href="https://www.linkedin.com/in/tlancas?trk=profile-badge"
            >
                Terrell Lancaster
            </a>
        </div>
        <Script src="https://platform.linkedin.com/badges/js/profile.js" async defer type="text/javascript" />
      </div>
    </section>
  );
}
