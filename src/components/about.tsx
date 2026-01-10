import { resumeData } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Shield } from 'lucide-react';
import Script from 'next/script';

export function About() {
  return (
    <section id="about" className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
      <div className="mission-node" data-hash="0xAB0UT_M3">
        <div className="node-marker"></div>
        <div className="flex items-center gap-2 mb-4">
          <Shield className="h-5 w-5 text-tactical-blue" />
          <h2 className="font-stencil text-3xl font-bold tracking-wider text-tactical-blue glow-blue uppercase">
            Operative Briefing
          </h2>
        </div>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{resumeData.summary}</p>
        <div className="mt-6">
          <h3 className="text-xl font-semibold tracking-tight font-tactical text-alert-amber uppercase">
            Security Clearances
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {resumeData.certifications.map((cert) => (
              <span key={cert} className="tech-tag flex items-center gap-1.5">
                  <CheckCircle2 className="h-3 w-3 text-accent" />
                  {cert}
              </span>
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
